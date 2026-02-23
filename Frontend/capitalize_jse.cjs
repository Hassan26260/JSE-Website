const fs = require('fs');
const path = require('path');

const dirToWalk = 'F:/JSE-Website/Frontend/src';

let filesModified = 0;
let replacements = 0;

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Simple parser: iterate characters. If inside <...>, skip replacement unless it's an alt attribute.
            // Actually, a simpler regex with a replacer function:
            // Match any text node between > and <
            const newContent = content.replace(/>([^<]+)</g, (match, textGroup) => {
                const replacedText = textGroup.replace(/\b(?:Jse|jse)\b/g, 'JSE');
                if (replacedText !== textGroup) {
                    replacements++;
                    updated = true;
                }
                return `>${replacedText}<`;
            });

            if (updated) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                filesModified++;
            }
        }
    });
}

walk(dirToWalk);
console.log(`Capitalized ${replacements} instances of 'Jse'/'jse' across ${filesModified} files.`);
