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

const files = walkSync('./src/pages');

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Fix logo
    content = content.replace(/<span className="nav-wordmark" style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>Lotus Room<\/span>/g, '<span className="nav-wordmark" style={{ fontStyle: \'italic\', fontFamily: \'"Cormorant Garamond", serif\', textTransform: \'uppercase\' }}>LOTUS ROOM</span>');
    content = content.replace(/<span className="nav-wordmark">Lotus Room<\/span>/g, '<span className="nav-wordmark" style={{ fontStyle: \'italic\', fontFamily: \'"Cormorant Garamond", serif\', textTransform: \'uppercase\' }}>LOTUS ROOM</span>');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated logo in ' + file);
    }
  }
});
