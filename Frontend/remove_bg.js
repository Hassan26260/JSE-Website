import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const processImage = async (filePath) => {
    try {
        console.log(`Processing ${filePath}`);
        const image = await Jimp.read(filePath);

        const ext = path.extname(filePath);
        const newPath = filePath.replace(ext, '.png');

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If near white, make transparent
            if (red >= 235 && green >= 235 && blue >= 235) {
                this.bitmap.data[idx + 3] = 0; // Alpha channel to 0
            }
        });

        await image.write(newPath);
        console.log(`Saved ${newPath}`);
    } catch (e) {
        console.error(`Error on ${filePath}:`, e.message);
    }
};

const run = async () => {
    const consultantDir = 'src/assets/client-logo/Consultant';
    for (let i = 1; i <= 13; i++) {
        // Assume converting webp to png manually or checking if png exists
        const pngFile = path.join(consultantDir, `logo${i}.png`);
        const webpFile = path.join(consultantDir, `logo${i}.webp`);

        if (fs.existsSync(pngFile)) {
            await processImage(pngFile);
        } else if (fs.existsSync(webpFile)) {
            await processImage(webpFile);
        }
    }

    const clientFiles = [
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
    ];

    for (const f of clientFiles) {
        const file = path.join('src/assets/client-logo', f);
        if (fs.existsSync(file)) {
            await processImage(file);
        }
    }
};

run();
