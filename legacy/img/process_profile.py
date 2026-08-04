"""Build portfolio profile image from profile-source.png.

Uses background blending (not cutout) to preserve natural hair/shoulders.
"""

from PIL import Image
import numpy as np

SRC = r"c:\Users\AK\OneDrive\Documents\portfolio1\Personal-Portfolio\img\profile-source.png"
OUT = r"c:\Users\AK\OneDrive\Documents\portfolio1\Personal-Portfolio\img\profile.png"


def blend_background(img: Image.Image) -> Image.Image:
    arr = np.array(img.convert("RGB"), dtype=np.float32)
    corners = np.array([
        arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1],
        arr[10, 10], arr[10, -11], arr[-11, 10], arr[-11, -11],
    ])
    bg = np.median(corners, axis=0)
    dist = np.linalg.norm(arr - bg, axis=2)
    soft = np.clip(dist / 42.0, 0, 1)

    dark = np.array([8, 8, 12], dtype=np.float32)
    mid = np.array([18, 12, 16], dtype=np.float32)
    result = arr.copy()

    for c in range(3):
        backdrop = dark[c] * (1 - soft) + mid[c] * soft * 0.35
        result[:, :, c] = arr[:, :, c] * soft + backdrop * (1 - soft)

    return Image.fromarray(np.clip(result, 0, 255).astype(np.uint8), "RGB")


def main():
    img = Image.open(SRC)
    max_w = 1200
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.Resampling.LANCZOS)

    result = blend_background(img)
    result.save(OUT, "PNG", optimize=True)
    print(f"Saved {OUT} ({result.size[0]}x{result.size[1]})")


if __name__ == "__main__":
    main()
