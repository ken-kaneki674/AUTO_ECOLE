"""Extrait les illustrations (panneaux, schémas) du manuel DGTT Bénin 2011.

Usage (PyMuPDF et Pillow requis, uniquement pour cette étape ponctuelle) :

    pip install pymupdf pillow
    python scripts/extract-benin-images.py "chemin/Code de route questions benin.pdf"
    npm run import:benin

On lit les images brutes embarquées dans le PDF (et non un rendu de la page) pour
ne pas récupérer le filigrane « SPECIMEN DGTT ». Chaque image est rattachée à la
question dont l'en-tête « Question n°N » la précède sur la page (ou sur la page
précédente si l'image est en haut de page). Les images identiques partagent un
même fichier. Les rares illustrations dessinées en vectoriel (et non en image) sont
redessinées à part, sans le filigrane : voir VECTOR_CLIPS. Résultat :
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
# « Question n°12 », et parfois « Question 379 » sans « n° » dans le manuel
HEADER = re.compile(r"\s*Question\s*(?:n\s*°\s*)?(\d+)")


def question_headers(doc):
    heads = []
    for page_index, page in enumerate(doc):
        for block in page.get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                text = "".join(span["text"] for span in line["spans"])
                match = HEADER.match(text)
                if match:
                    heads.append((page_index, line["bbox"][1], int(match.group(1))))
    # Les blocs d'une page ne sont pas toujours dans l'ordre de lecture : sans ce tri,
    # owner() rattachait certaines images à la question précédente (Q238, Q255…).
    heads.sort()
    return heads


# Illustrations dessinées en vectoriel dans le manuel :
# question -> (page, zone en points, légendes (texte, x, y, taille, gras)).
VECTOR_CLIPS = {
    130: (33, (408, 240, 516, 284), [("SAVE", 416, 277, 10.5, True)]),
    # Le manuel imprime la légende « a » à gauche de la page, loin des balises :
    # elle revient à la quatrième balise, la seule qui n'en a pas.
    165: (40, (305, 50, 545, 200), [("c", 326, 194, 10, False), ("d", 390, 194, 10, False),
                                    ("b", 456, 194, 10, False), ("a", 518, 194, 10, False)]),
}
# Zones à ignorer (page, zone en points) : l'en-tête « Question n°236 » est imprimé en
# images découpées, que la règle de position rattacherait à Q235.
IGNORED_ZONES = [(60, (68, 130, 200, 182))]
# Le filigrane « SPECIMEN DGTT » est fait de tracés pleins gris moyen, sans contour.
WATERMARK_GRAY = (0.45, 0.55)


def is_watermark(path):
    fill = path.get("fill")
    return bool(fill) and not path.get("color") and all(WATERMARK_GRAY[0] < c < WATERMARK_GRAY[1] for c in fill)


def draw_path(shape, path):
    for item in path["items"]:
        if item[0] == "l":
            shape.draw_line(item[1], item[2])
        elif item[0] == "re":
            shape.draw_rect(item[1])
        elif item[0] == "qu":
            shape.draw_quad(item[1])
        elif item[0] == "c":
            shape.draw_bezier(item[1], item[2], item[3], item[4])
    shape.finish(
        fill=path.get("fill"),
        color=path.get("color"),
        width=path.get("width") or 1,
        closePath=path.get("closePath", False),
        even_odd=path.get("even_odd", False),
        fill_opacity=path.get("fill_opacity") or 1,
        stroke_opacity=path.get("stroke_opacity") or 1,
        lineCap=max(path.get("lineCap") or (0,)),
        lineJoin=path.get("lineJoin") or 0,
    )


def redraw(doc, page_no, clip, labels):
    """Recopie les tracés de la zone sur une page vierge, sans le filigrane, puis l'exporte en WebP."""
    src = doc[page_no - 1]
    clip = pymupdf.Rect(clip)
    out = pymupdf.open()
    page = out.new_page(width=src.rect.width, height=src.rect.height)
    shape = page.new_shape()
    for path in src.get_drawings():
        if is_watermark(path) or not path["rect"].intersects(clip):
            continue
        draw_path(shape, path)
    shape.commit()
    for text, x, y, size, bold in labels:
        page.insert_text((x, y), text, fontsize=size, fontname="hebo" if bold else "helv")
    return to_bytes(page.get_pixmap(dpi=200, clip=clip), MAX_SIDE)


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


def is_blank(data):
    """Image sans aucun tracé visible (fond blanc ou transparent)."""
    image = Image.open(io.BytesIO(data)).convert("RGBA")
    flat = Image.new("RGBA", image.size, "white")
    flat.alpha_composite(image)
    return flat.convert("L").getextrema()[0] >= 230


def image_pixmap(doc, xref):
    pix = pymupdf.Pixmap(doc, xref)
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)
    if pix.colorspace and pix.colorspace.n not in (1, 3):
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    smask = doc.extract_image(xref).get("smask")
    if smask:
        mask = pymupdf.Pixmap(doc, smask)
        if (mask.width, mask.height) == (pix.width, pix.height):
            pix = pymupdf.Pixmap(pix, mask)
    return pix


def has_letter_label(page, rect):
    """Petite étiquette dont la lettre ou le chiffre (« a », « 1 »…) est du texte posé par-dessus."""
    if rect.width > 40 or rect.height > 40:
        return False
    words = page.get_text("words", clip=rect + (-2, -2, 2, 2))
    return any(len(w[4]) == 1 and w[4].isalnum() for w in words)


def recompose(doc, page_index, rects):
    """Redessine une zone (images, tracés, lettres) sur une page vierge, sans le filigrane."""
    src = doc[page_index]
    clip = pymupdf.Rect(rects[0])
    for rect in rects[1:]:
        clip |= rect
    clip = (clip + (-4, -4, 4, 4)) & src.rect
    out = pymupdf.open()
    page = out.new_page(width=src.rect.width, height=src.rect.height)
    for info in src.get_image_info(xrefs=True):
        rect = pymupdf.Rect(info["bbox"])
        if info["xref"] and rect.intersects(clip):
            page.insert_image(rect, pixmap=image_pixmap(doc, info["xref"]))
    shape = page.new_shape()
    for path in src.get_drawings():
        if is_watermark(path) or not path["rect"].intersects(clip):
            continue
        draw_path(shape, path)
    shape.commit()
    for block in src.get_text("dict", clip=clip)["blocks"]:
        for line in block.get("lines", []):
            for span in line["spans"]:
                if span["text"].strip() and pymupdf.Rect(span["bbox"]) in clip:
                    color = tuple(((span["color"] >> shift) & 255) / 255 for shift in (16, 8, 0))
                    page.insert_text(span["origin"], span["text"], fontsize=span["size"], fontname="helv", color=color)
    return to_bytes(page.get_pixmap(dpi=150, clip=clip))


def to_bytes(pix, max_side=MAX_SIDE * 2):
    image = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
    image.thumbnail((max_side, max_side))
    buffer = io.BytesIO()
    image.save(buffer, "WEBP", quality=82)
    return buffer.getvalue()


def save(data):
    name = hashlib.sha1(data).hexdigest()[:12] + ".webp"
    (OUT_DIR / name).write_bytes(data)
    return f"/benin/signs/{name}"


def main(pdf_path):
    doc = pymupdf.open(pdf_path)
    heads = question_headers(doc)

    placements = []
    for page_index, page in enumerate(doc):
        for info in page.get_image_info(xrefs=True):
            rect = pymupdf.Rect(info["bbox"])
            ignored = any(page_index == p - 1 and rect.intersects(zone) for p, zone in IGNORED_ZONES)
            if info["xref"] and rect.width > 18 and rect.height > 18 and not ignored:
                placements.append((page_index, rect, info["xref"]))

    # Une image présente sur beaucoup de pages est décorative (filigrane, en-tête).
    usage = Counter(xref for _, _, xref in placements)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    owned = defaultdict(list)  # question -> [(page, zone, xref)]
    for page_index, rect, xref in sorted(placements, key=lambda p: (p[0], p[1].y0, p[1].x0)):
        if usage[xref] > 15:
            continue
        # Les panneaux sont centrés à droite du texte : on se fie au milieu de l'image.
        num = owner(heads, page_index, (rect.y0 + rect.y1) / 2)
        if num is not None:
            owned[num].append((page_index, rect, xref))

    files = {}
    mapping = defaultdict(list)
    for num, items in sorted(owned.items()):
        # « Choisissez le panneau manquant » : scène, panneaux proposés et étiquettes a, b, c…
        # dont la lettre est du texte. Pris un par un, les morceaux n'ont plus de sens :
        # on redessine l'ensemble en une seule image.
        if any(has_letter_label(doc[page_index], rect) for page_index, rect, _ in items):
            for page_index in sorted({p for p, _, _ in items}):
                rects = [rect for p, rect, _ in items if p == page_index]
                mapping[num].append(save(recompose(doc, page_index, rects)))
            continue
        for _, _, xref in items:
            if xref not in files:
                data = to_webp(doc, xref)
                files[xref] = None if is_blank(data) else save(data)
            if files[xref] and files[xref] not in mapping[num]:
                mapping[num].append(files[xref])

    for num, (page_no, clip, labels) in VECTOR_CLIPS.items():
        mapping[num].append(save(redraw(doc, page_no, clip, labels)))

    # Les fichiers qu'aucune question n'utilise plus sont supprimés.
    used = {src.rsplit("/", 1)[1] for srcs in mapping.values() for src in srcs}
    for path in OUT_DIR.glob("*.webp"):
        if path.name not in used:
            path.unlink()

    MAP_FILE.write_text(json.dumps(dict(sorted(mapping.items())), indent=1), encoding="utf-8")
    print(f"{len(used)} images dans {OUT_DIR}")
    print(f"{len(mapping)} questions illustrées -> {MAP_FILE}")


if __name__ == "__main__":
    main(sys.argv[1])
