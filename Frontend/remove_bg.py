import os
import glob
from PIL import Image

def remove_white_bg(img_path):
    print(f"Processing {img_path}")
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        # Tolerance for white
        for item in datas:
            if item[0] >= 240 and item[1] >= 240 and item[2] >= 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        base, ext = os.path.splitext(img_path)
        new_path = base + ".png"
        img.save(new_path, "PNG")
        print(f"Saved {new_path}")
        
    except Exception as e:
        print(f"Error on {img_path}: {e}")

# Consultant Logos
for i in range(1, 14):
    p = f"F:/JSE-Website/Frontend/src/assets/client-logo/Consultant/logo{i}.webp"
    if os.path.exists(p):
        remove_white_bg(p)
    else:
        # Check if png exists (just in case)
        p = f"F:/JSE-Website/Frontend/src/assets/client-logo/Consultant/logo{i}.png"
        if os.path.exists(p):
            remove_white_bg(p)

client_files = [
    "Arabtec_Holding_Logo.jpg",
    "L&T.png",
    "NAFFCO_Logo_(Transparent).png",
    "voltas.jpg",
    "aster.jpg",
    "johnson-controls-middletown.jpg",
    "petrofac logo.png",
    "bk gulf.jpg",
    "emirates sas.jpg",
    "futuremetro logo.png",
    "al shandagha1.png",
    "al futtaim.png",
    "zone.png"
]

for f in client_files:
    p = os.path.join("F:/JSE-Website/Frontend/src/assets/client-logo", f)
    if os.path.exists(p):
        remove_white_bg(p)
