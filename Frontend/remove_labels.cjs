const fs = require('fs');
const path = require('path');
const dirs = ['F:/JSE-Website/Frontend/src/pages/services']; // recursive walk will hit /design

let filesProcessed = 0;
let tagsRemoved = 0;

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Regex to remove the entire line containing the hero-small-label
            const newContent = content.replace(/^.*<span className="hero-small-label">.*?<\/span>.*\r?\n?/gm, '');
            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                filesProcessed++;
                tagsRemoved += (content.match(/<span className="hero-small-label">/g) || []).length;
            }
        }
    });
}

dirs.forEach(dir => {
    if (fs.existsSync(dir)) walk(dir);
});

console.log(`Successfully removed ${tagsRemoved} hero labels from ${filesProcessed} files.`);
