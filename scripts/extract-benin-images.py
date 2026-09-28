"""Extrait les illustrations (panneaux, schémas) du manuel DGTT Bénin 2011.

Usage (PyMuPDF et Pillow requis, uniquement pour cette étape ponctuelle) :

    pip install pymupdf pillow
    python scripts/extract-benin-images.py "chemin/Code de route questions benin.pdf"
    npm run import:benin

On lit les images brutes embarquées dans le PDF (et non un rendu de la page) pour
ne pas récupérer le filigrane « SPECIMEN DGTT ». Chaque image est rattachée à la
question dont l'en-tête « Question n°N » la précède sur la page (ou sur la page
précédente si l'image est en haut de page). Les images identiques partagent un
même fichier. Résultat :
    public/benin/signs/<empreinte>.webp
    scripts/benin-source/images.json   { "numéro de question": ["/benin/signs/…webp"] }
"""
import hashlib
import io
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "benin" / "signs"
MAP_FILE = ROOT / "scripts" / "benin-source" / "images.json"
MAX_SIDE = 320
HEADER = re.compile(r"\s*Question\s*n\s*°\s*(\d+)")


def question_headers(doc):
    heads = []
    for page_index, page in enumerate(doc):
        for block in page.get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                text = "".join(span["text"] for span in line["spans"])
                match = HEADER.match(text)
                if match:
                    heads.append((page_index, line["bbox"][1], int(match.group(1))))
    return heads


def owner(heads, page_index, y):
    """Dernière question dont l'en-tête est au-dessus de y (tolérance : image alignée sur l'en-tête)."""
    candidate = None
    for head_page, head_y, num in heads:
        if (head_page, head_y) <= (page_index, y):
            candidate = num
        else:
            break
    return candidate


def to_webp(doc, xref):
    pix = pymupdf.Pixmap(doc, xref)
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)  # canal alpha opaque : on appliquera le masque nous-mêmes
    if pix.colorspace and pix.colorspace.n not in (1, 3):
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    image = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
    smask = doc.extract_image(xref).get("smask")
    if smask:
        mask = Image.open(io.BytesIO(pymupdf.Pixmap(doc, smask).tobytes("png"))).convert("L")
        image.putalpha(mask.resize(image.size))
    image.thumbnail((MAX_SIDE, MAX_SIDE))
    buffer = io.BytesIO()
    image.save(buffer, "WEBP", quality=82)
    return buffer.getvalue()


def main(pdf_path):
    doc = pymupdf.open(pdf_path)
    heads = question_headers(doc)

    placements = []
    for page_index, page in enumerate(doc):
        for info in page.get_image_info(xrefs=True):
            rect = pymupdf.Rect(info["bbox"])
            if info["xref"] and rect.width > 18 and rect.height > 18:
                placements.append((page_index, rect, info["xref"]))

    # Une image présente sur beaucoup de pages est décorative (filigrane, en-tête).
    usage = Counter(xref for _, _, xref in placements)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    files = {}
    mapping = defaultdict(list)
    for page_index, rect, xref in sorted(placements, key=lambda p: (p[0], p[1].y0, p[1].x0)):
        if usage[xref] > 15:
            continue
        # Les panneaux sont centrés à droite du texte : on se fie au milieu de l'image.
        num = owner(heads, page_index, (rect.y0 + rect.y1) / 2)
        if num is None:
            continue
        if xref not in files:
            data = to_webp(doc, xref)
            name = hashlib.sha1(data).hexdigest()[:12] + ".webp"
            (OUT_DIR / name).write_bytes(data)
            files[xref] = f"/benin/signs/{name}"
        if files[xref] not in mapping[num]:
            mapping[num].append(files[xref])

    MAP_FILE.write_text(json.dumps(dict(sorted(mapping.items())), indent=1), encoding="utf-8")
    print(f"{len(set(files.values()))} images écrites dans {OUT_DIR}")
    print(f"{len(mapping)} questions illustrées -> {MAP_FILE}")


if __name__ == "__main__":
    main(sys.argv[1])
