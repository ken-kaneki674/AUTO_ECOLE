"""Découpe les figures des sujets de révision (carrefours, panneaux, volant) dans les PDF du moniteur.

Usage (PyMuPDF et Pillow requis, uniquement pour cette étape ponctuelle) :

    pip install pymupdf pillow
    python scripts/extract-revision-figures.py

Les PDF « Sujet de révision N°X.pdf » du dossier chat/ (non versionné) portent un
filigrane « Online Permis » : c'est un bloc /Artifact d'en-tête dessiné en gris, que
l'on retire du flux de chaque page avant le rendu. La figure d'une question est la
bande verticale sans texte, entre son « Question n°N » et le suivant, qui porte le
plus d'image
(les lettres a à e sous les panneaux et la cote « 150 m » font partie de la figure).
On la rend, on rogne le blanc autour, et on l'enregistre :
    public/revision/sujet<X>-q<N>.webp
"""
import io
import re
from pathlib import Path

import pymupdf
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
CHAT_DIR = ROOT / "chat"
OUT_DIR = ROOT / "public" / "revision"

# sujet -> questions qui s'appuient sur une figure
FIGURES = {
    4: [18],
    5: list(range(1, 21)),
}

# Pixels à rogner en haut : l'image du volant contient le bas du titre « Question n°18 »
CROP_TOP = {(4, 18): 28}

WATERMARK = re.compile(rb"/Artifact<</Type/Pagination/Subtype/Header[^>]*>>BDC q/GS\d+ gs \.753 g.*?EMC", re.S)
HEADER = re.compile(r"^Question n°\s*(\d+)")
FIGURE_TEXT = re.compile(r"^([a-e]\s*)+$|^\d+\s*m$")
DPI = 200
MARGIN_X = (50, 545)


def remove_watermark(doc):
    for page in doc:
        page.clean_contents()
        xref = page.get_contents()[0]
        doc.update_stream(xref, WATERMARK.sub(b"", doc.xref_stream(xref)))


def text_blocks(doc):
    """[(page, y0, y1, texte)] dans l'ordre de lecture, sans les blocs vides."""
    out = []
    for pno, page in enumerate(doc):
        for b in page.get_text("blocks"):
            text = " ".join(b[4].split())
            if text:
                out.append((pno, b[1], b[3], text))
    return sorted(out, key=lambda b: (b[0], b[1]))


def image_area(page, y0, y1):
    """Surface d'image comprise entre y0 et y1 : une bande blanche de fin de page vaut 0."""
    band = pymupdf.Rect(0, y0, page.rect.width, y1)
    return sum((pymupdf.Rect(info["bbox"]) & band).get_area() for info in page.get_image_info())


def figure_band(doc, blocks, question):
    """(page, y0, y1) de la bande sans texte de la question qui porte le plus d'image."""
    start = next(i for i, b in enumerate(blocks) if (m := HEADER.match(b[3])) and int(m.group(1)) == question)
    end = next((i for i in range(start + 1, len(blocks)) if HEADER.match(blocks[i][3])), len(blocks))
    kept = [b for b in blocks[start:end] if not FIGURE_TEXT.match(b[3])]
    # Le « Question n°N+1 » (ou le NB final) borne la dernière bande
    stop = blocks[end] if end < len(blocks) else None
    best = None
    for cur, nxt in zip(kept, kept[1:] + [stop]):
        page, top = cur[0], cur[2] + 4  # sans les jambages de la ligne au-dessus
        bottom = nxt[1] if nxt and nxt[0] == page else doc[page].rect.height - 40
        score = image_area(doc[page], top, bottom)
        if best is None or score > best[0]:
            best = (score, page, top, bottom)
    _, page, top, bottom = best
    # Les lettres a à e qui commencent dans la bande en font partie, même si elles
    # débordent sous la ligne de texte suivante (Q5 du sujet 5)
    for b in blocks[start:end]:
        if b[0] == page and FIGURE_TEXT.match(b[3]) and top <= b[1] < bottom:
            bottom = max(bottom, b[2] + 4)
    return page, top, bottom


def ink_box(img):
    """Cadre de ce qui n'est pas blanc."""
    bg = Image.new("RGB", img.size, (255, 255, 255))
    return ImageChops.difference(img, bg).convert("L").point(lambda v: 255 if v > 24 else 0).getbbox()


def figure_x(page, y0, y1):
    """Bornes horizontales des images de la bande : écarte un bout de texte voisin
    (« proposes: » à gauche des panneaux de Q5). Les petites images vides qui
    accompagnent certaines lignes de texte sont ignorées."""
    band = pymupdf.Rect(0, y0, page.rect.width, y1)
    rects = [pymupdf.Rect(i["bbox"]) & band for i in page.get_image_info()]
    rects = [r for r in rects if r.width > 20 and r.height > 20]
    if not rects:
        return MARGIN_X
    return min(r.x0 for r in rects) - 4, max(r.x1 for r in rects) + 4


def render(doc, page, y0, y1, crop_top=0):
    x0, x1 = figure_x(doc[page], y0, y1)
    clip = pymupdf.Rect(x0, y0, x1, y1)
    pix = doc[page].get_pixmap(dpi=DPI, clip=clip)
    img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
    box = ink_box(img)
    if box and crop_top:
        img = img.crop((0, box[1] + crop_top, img.width, img.height))
    box = ink_box(img)
    if box:
        pad = 12
        img = img.crop((max(box[0] - pad, 0), max(box[1] - pad, 0),
                        min(box[2] + pad, img.width), min(box[3] + pad, img.height)))
    return img


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for sujet, questions in FIGURES.items():
        doc = pymupdf.open(CHAT_DIR / f"Sujet de révision N°{sujet}.pdf")
        remove_watermark(doc)
        blocks = text_blocks(doc)
        for q in questions:
            page, y0, y1 = figure_band(doc, blocks, q)
            out = OUT_DIR / f"sujet{sujet}-q{q}.webp"
            render(doc, page, y0, y1, CROP_TOP.get((sujet, q), 0)).save(out, "WEBP", quality=85)
            print(f"sujet {sujet} Q{q} : page {page + 1}, y {y0:.0f}-{y1:.0f} -> {out.name}")


if __name__ == "__main__":
    main()
