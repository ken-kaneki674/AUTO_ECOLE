"""Rattache les explications vocales et les images du moniteur aux questions de révision.

Usage :

    python scripts/build-revision-media.py

Source : l'export WhatsApp du groupe « RÉVISION EXAMEN OCTOBRE » (dossier chat/,
non versionné). Chaque soir, le moniteur publie « EXPLICATIONS DES QUESTIONS DU
SUJET N°X », puis pour chaque question « Explication de la question N » suivi de
ses vocaux et images, jusqu'à « FIN DES EXPLICATIONS ». Les médias postés entre
l'en-tête du sujet et la première « question N » vont à la question 1.

Seuls les sujets de SUJETS_VERIFIES sont écrits : leurs questions dans
src/data/revisionQuestions.js suivent la numérotation du moniteur. Les autres
n'y correspondent pas encore, et leurs explications tomberaient sur la mauvaise
question. Résultat :
    src/data/mediaMapping.js   { sujetN: { questions: { 'rev-N-Q': { audios, images } } } }
    public/chat/<fichier>      copie des seuls médias utilisés
"""
import re
import shutil
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHAT_DIR = ROOT / "chat"
EXPORT = CHAT_DIR / "Discussion WhatsApp avec RÉVISION EXAMEN OCTOBRE.txt"
PUBLIC_DIR = ROOT / "public" / "chat"
OUT_JS = ROOT / "src" / "data" / "mediaMapping.js"

SUJETS_VERIFIES = [1, 2, 3, 4, 5]

# Même page du manuel envoyée deux fois (Q17) : on garde la photo nette.
DOUBLONS = {"IMG-20261009-WA0005.jpg"}

# L'en-tête doit ouvrir le message : « Les explications des questions du sujet N°5
# sont terminées » ne doit pas rouvrir le sujet.
SUJET_RE = re.compile(r"(?i) - [^:]+: \W*\*?explications des questions du sujet[^0-9]*N°\s*(\d+)")
QUESTION_RE = re.compile(r"(?i)explication de la \*?question\s*(\d+)")
MEDIA_RE = re.compile(r"((?:AUD|IMG|VID)-\d+-WA\d+\.(\w+)) \(fichier joint\)")
AUDIO_EXT = {"opus"}
IMAGE_EXT = {"jpg", "jpeg", "png", "webp"}


def parse_export(path):
    """{(sujet, question): [fichier, ...]} dans l'ordre de publication."""
    media = defaultdict(list)
    sujet = question = None
    for line in path.read_text(encoding="utf-8").splitlines():
        m = SUJET_RE.search(line)
        if m:
            sujet, question = int(m.group(1)), 1
            continue
        if "FIN DES EXPLICATIONS" in line:
            sujet = None
            continue
        if sujet is None:
            continue
        m = QUESTION_RE.search(line)
        if m:
            question = int(m.group(1))
        m = MEDIA_RE.search(line)
        if m and m.group(1) not in DOUBLONS:
            media[(sujet, question)].append(m.group(1))
    return media


def js_list(files):
    return "[" + ", ".join(f"'/chat/{f}'" for f in files) + "]"


def render(media):
    out = [
        "// Fichier généré par scripts/build-revision-media.py : ne pas modifier à la main.",
        "// Explications du moniteur (vocaux et images) publiées dans le groupe WhatsApp,",
        "// rattachées d'après « Explication de la question N ».",
        "",
        "export const MEDIA_MAPPING = {",
    ]
    for s in SUJETS_VERIFIES:
        out.append(f"  sujet{s}: {{")
        out.append("    questions: {")
        keys = sorted(q for (si, q) in media if si == s)
        for i, q in enumerate(keys):
            files = media[(s, q)]
            audios = [f for f in files if f.rsplit(".", 1)[1] in AUDIO_EXT]
            images = [f for f in files if f.rsplit(".", 1)[1] in IMAGE_EXT]
            sep = "," if i < len(keys) - 1 else ""
            out.append(f"      'rev-{s}-{q}': {{ audios: {js_list(audios)}, images: {js_list(images)} }}{sep}")
        out.append("    }")
        out.append("  }," if s != SUJETS_VERIFIES[-1] else "  }")
    out += [
        "}",
        "",
        "const EMPTY = { audios: [], images: [] }",
        "",
        "export function getQuestionMedia(sujetId, questionId) {",
        "  return MEDIA_MAPPING[sujetId]?.questions[questionId] || EMPTY",
        "}",
        "",
    ]
    return "\n".join(out)


def main():
    if not EXPORT.exists():
        sys.exit(f"Export introuvable : {EXPORT}")
    media = parse_export(EXPORT)
    used = [f for (s, _), files in media.items() if s in SUJETS_VERIFIES for f in files
            if f.rsplit(".", 1)[1] in AUDIO_EXT | IMAGE_EXT]
    missing = [f for f in used if not (CHAT_DIR / f).exists()]
    if missing:
        sys.exit(f"Médias absents de chat/ : {missing}")

    OUT_JS.write_text(render(media), encoding="utf-8")
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for f in used:
        if not (PUBLIC_DIR / f).exists():
            shutil.copy2(CHAT_DIR / f, PUBLIC_DIR / f)

    for s in SUJETS_VERIFIES:
        sans = [q for q in range(1, 21) if (s, q) not in media]
        print(f"Sujet {s} : {20 - len(sans)}/20 questions avec explication"
              + (f" (sans média exporté : {sans})" if sans else ""))
    print(f"{len(used)} médias utilisés, copiés dans public/chat/")


if __name__ == "__main__":
    main()
