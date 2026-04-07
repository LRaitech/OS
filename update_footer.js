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

    // Remove prices from footer links
    content = content.replace(/: from \$15/g, '');
    content = content.replace(/: \$99/g, '');
    content = content.replace(/: \$2,500/g, '');
    content = content.replace(/: \$8,000/g, '');
    content = content.replace(/: \$12,000/g, '');
    content = content.replace(/: Custom \/ Capital/g, '');

    // Replace the footer CTA text
    content = content.replace(/Start at<br \/><em>\$15\.<\/em>/g, 'Enter the<br /><em>Dojo.</em>');
    content = content.replace(/<Link to="\/rooms" className="btn-nav">Get access →<\/Link>/g, '<Link to="/dojo" className="btn-nav">Enter Dojo →</Link>');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated footer in ' + file);
    }
  }
});
