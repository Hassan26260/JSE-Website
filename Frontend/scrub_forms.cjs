const fs = require('fs');
const path = require('path');

const contextPathResolver = (filePath) => {
    const srcPath = path.resolve('F:/JSE-Website/Frontend/src');
    const fileDir = path.dirname(filePath);
    let relativePath = path.relative(fileDir, path.join(srcPath, 'context/ContactModalContext'));
    // Convert backslashes to forward slashes for imports
    relativePath = relativePath.replace(/\\/g, '/');
    if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
    }
    return relativePath;
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // 1. Remove StickyContact blocks completely
    let startIndex = content.indexOf('<StickyContact');
    while (startIndex !== -1) {
        let endIndex = content.indexOf('</StickyContact>', startIndex);
        if (endIndex !== -1) {
            let closeTagEnd = endIndex + 16;
            let blockStart = startIndex;
            let searchBack = content.substring(0, startIndex);
            let commentsMatch = searchBack.match(/(\{\/\*.*?\*\/\}\s*)*$/);
            if (commentsMatch) blockStart -= commentsMatch[0].length;

            content = content.substring(0, blockStart) + content.substring(closeTagEnd);
            hasChanges = true;
        } else {
            break;
        }
        startIndex = content.indexOf('<StickyContact');
    }

    // 2. Remove <div className="form-container"...> blocks
    startIndex = content.indexOf('<div className="form-container"');
    while (startIndex !== -1) {
        let openDivs = 0;
        let i = startIndex;
        let endIndex = -1;
        while (i < content.length) {
            if (content.startsWith('<div', i) && [' ', '>', '\n', '\r'].includes(content[i + 4])) {
                openDivs++;
            } else if (content.startsWith('</div', i)) {
                let j = i + 5;
                while (content[j] === ' ' || content[j] === '\n') j++;
                if (content[j] === '>') {
                    openDivs--;
                    if (openDivs === 0) {
                        endIndex = j + 1;
                        break;
                    }
                }
            }
            i++;
        }

        if (endIndex !== -1) {
            let blockStart = startIndex;
            let searchBack = content.substring(0, startIndex);
            let commentsMatch = searchBack.match(/(\{\/\*.*?\*\/\}\s*)*$/);
            if (commentsMatch) blockStart -= commentsMatch[0].length;

            content = content.substring(0, blockStart) + content.substring(endIndex);
            hasChanges = true;
        } else {
            console.log("Malformed div in", filePath);
            break;
        }

        startIndex = content.indexOf('<div className="form-container"');
    }

    // 3. Transform scrollToForm block, and add context import if needed
    if (hasChanges) {
        let scrollToFormRegex1 = /const\s+stickyContactRef\s*=\s*useRef\([^)]*\);\s*const\s+scrollToForm\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};/g;
        let scrollToFormRegex2 = /const\s+formRef\s*=\s*useRef\([^)]*\);\s*const\s+scrollToForm\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};/g;

        const replaceStr = `const { openModal } = useContactModal();\n\n  const scrollToForm = () => {\n    openModal();\n  };`;

        let replaced = false;

        let initialContent = content;
        content = content.replace(scrollToFormRegex1, replaceStr);
        content = content.replace(scrollToFormRegex2, replaceStr);

        if (content === initialContent) {
            let bareRegex = /const\s+scrollToForm\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};/g;
            content = content.replace(bareRegex, replaceStr);
        }

        if (content !== initialContent) {
            replaced = true;
        }

        // Only add import if we added openModal and it isn't already imported
        if (replaced && !content.includes('useContactModal')) {
            const contextRelativePath = contextPathResolver(filePath);
            const importStatement = `import { useContactModal } from '${contextRelativePath}';\n`;

            // Insert after the last import
            const lastImportIndex = content.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLastImport = content.indexOf(';', lastImportIndex);
                if (endOfLastImport !== -1) {
                    content = content.slice(0, endOfLastImport + 1) + '\n' + importStatement + content.slice(endOfLastImport + 1);
                } else {
                    const endOfLastImportLine = content.indexOf('\\n', lastImportIndex);
                    content = content.slice(0, endOfLastImportLine + 1) + importStatement + content.slice(endOfLastImportLine + 1);
                }
            } else {
                content = importStatement + content; // Top of file
            }
        }

        // 4. Cleanup old imports
        content = content.replace(/import\s+StickyContact.*?;\n?/g, '');
        content = content.replace(/import\s+ContactForm.*?;\n?/g, '');

        // Remove unused const scrollToForm if it was originally there
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Cleaned:', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

walkDir('F:/JSE-Website/Frontend/src/pages');
