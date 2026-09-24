import json
import re
from pathlib import Path

from PIL import Image

root = Path(r"c:/webDev/wedding")
folders = ["eskuvo1", "eskuvo2", "eskuvo3"]


def sort_key(path: Path):
    match = re.search(r"(\d+)", path.stem)
    if match:
        return (int(match.group(1)), path.stem.lower())
    return (10**18, path.stem.lower())


entries = []
for folder in folders:
    preview_dir = root / "kepek" / "gallery-web" / folder
    full_dir = root / "kepek" / folder
    preview_dir.mkdir(parents=True, exist_ok=True)
    full_dir.mkdir(parents=True, exist_ok=True)

    for preview in sorted(preview_dir.iterdir(), key=sort_key):
        if not preview.is_file():
            continue

        stem = preview.stem.lower()
        matches = [f for f in full_dir.iterdir() if f.is_file() and f.stem.lower() == stem]

        if matches:
            full = sorted(matches, key=lambda item: item.name.lower())[0]
        elif preview.suffix.lower() in {".jfif", ".jpe", ".jpeg"}:
            full = full_dir / (preview.stem + ".JPG")
            if not full.exists():
                with Image.open(preview) as img:
                    if img.mode in {"RGBA", "LA", "P"}:
                        img = img.convert("RGB")
                    img.save(full, format="JPEG", quality=95, subsampling=0, optimize=True)
        else:
            full = full_dir / preview.name

        if full.exists():
            entries.append({
                "preview": f"./kepek/gallery-web/{folder}/{preview.name}",
                "full": f"./kepek/{folder}/{full.name}",
            })

(root / "gallery-data.js").write_text(
    "const galleryImages = " + json.dumps(entries, separators=(",", ":")) + ";\n",
    encoding="utf-8",
)

print(f"entries={len(entries)}")
print(f"first={entries[0]['preview'] if entries else 'n/a'}")
print(f"last={entries[-1]['preview'] if entries else 'n/a'}")
