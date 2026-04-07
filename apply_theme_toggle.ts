import fs from 'fs';
import path from 'path';

function walkSync(dir: string, filelist: string[] = []) {
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

const files = walkSync('./src/pages');

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove :root block
    content = content.replace(/:root\s*\{[\s\S]*?\}/, '');

    // Replace rgba values
    content = content.replace(/rgba\(240,235,225,/g, 'rgba(var(--rgb-cream),');
    content = content.replace(/rgba\(26,23,20,/g, 'rgba(var(--rgb-ink),');
    content = content.replace(/rgba\(184,134,11,/g, 'rgba(var(--rgb-gold),');
    content = content.replace(/rgba\(212,168,75,/g, 'rgba(var(--rgb-gold-dark),');
    content = content.replace(/rgba\(139,115,85,/g, 'rgba(var(--rgb-warm-grey),');
    content = content.replace(/rgba\(90,74,53,/g, 'rgba(var(--rgb-warm-grey2),');
    
    // Remove <nav>...</nav>
    content = content.replace(/<nav>[\s\S]*?<\/nav>/, '');

    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Pages updated.');
