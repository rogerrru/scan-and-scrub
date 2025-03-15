import os
from pathlib import Path
from PIL import Image

folders = ["src/assets/procedures", "src/assets/tools"]

def convert_to_webp(folder_path):
    folder = Path(folder_path)
    for file_path in folder.glob("*.png"): 
        webp_path = file_path.with_suffix(".webp")  
        if not webp_path.exists(): 
            try:
                img = Image.open(file_path)
                img.save(webp_path, "WEBP", quality=80)  
                print(f"✅ Converted: {file_path} -> {webp_path}")

                file_path.unlink()
                print(f"🗑️ Deleted: {file_path}")

            except Exception as e:
                print(f"❌ Error converting {file_path}: {e}")

for folder in folders:
    convert_to_webp(folder)

print("\n🎉 Conversion completed!")
