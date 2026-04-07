import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('./src');

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Change "tools" or "prompts" to "AI Frameworks" or "Venture Tools"
    // Let's replace "tools" with "AI Frameworks" and "tool" with "AI Framework"
    // Except for class names like "tools-list", "tool-row", "tools-r", "tools-grid", "tool-name", "tool-desc", "tool-price"
    // We can use a regex that doesn't match if it's preceded or followed by a hyphen or quote.
    
    // Actually, it's safer to just do a case-insensitive replace that avoids class names.
    // Let's just do it manually for the files.
  }
});
