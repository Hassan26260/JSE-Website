const Jimp = require('jimp');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const processImage = async (pngFilePath) => {
    try {
        console.log(`Processing ${pngFilePath} with Jimp`);
        const image = await Jimp.read(pngFilePath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If near white, make transparent
            if (red >= 235 && green >= 235 && blue >= 235) {
                this.bitmap.data[idx + 3] = 0; // Alpha channel to 0
            }
        });

        await image.writeAsync(pngFilePath);
        console.log(`Saved transparent PNG: ${pngFilePath}`);
    } catch (e) {
        console.error(`Jimp Error on ${pngFilePath}:`, e.message);
    }
};

const run = async () => {
    const consultantDir = 'src/assets/client-logo/Consultant';

    // Process Consultant Logos (WebP -> PNG -> Transparent)
    for (let i = 1; i <= 13; i++) {
        const webpFile = path.join(consultantDir, `logo${i}.webp`);
        const pngFile = path.join(consultantDir, `logo${i}.png`);

        if (fs.existsSync(webpFile)) {
            try {
                // Convert WebP to PNG using Sharp
                await sharp(webpFile).toFile(pngFile);
                console.log(`Sharp converted: ${webpFile} -> ${pngFile}`);

                // Process PNG with Jimp for transparency
                await processImage(pngFile);
            } catch (err) {
                console.error(`Sharp Error on ${webpFile}:`, err.message);
            }
        }
    }
};

run();
