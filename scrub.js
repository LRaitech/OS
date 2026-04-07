import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory()
        ? walkSync(dirFile, filelist)
        : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') {
        // Ignore
      } else {
        throw err;
      }
    }
  });
  return filelist;
}

const files = walkSync('./src');

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace M-Dashes
    content = content.replace(/ — /g, ' : ');
    content = content.replace(/—/g, ':');

    // Replace Prompts with AI Frameworks
    content = content.replace(/prompt system/gi, 'AI Framework system');
    content = content.replace(/prompt workflows/gi, 'AI Framework workflows');
    content = content.replace(/prompt/gi, 'AI Framework');
    content = content.replace(/Prompt/gi, 'AI Framework');
    content = content.replace(/Prompts/gi, 'AI Frameworks');
    content = content.replace(/prompts/gi, 'AI Frameworks');

    // Replace Room Setup with Infrastructure Deployment
    content = content.replace(/Room Setup/g, 'Infrastructure Deployment');
    content = content.replace(/room setup/gi, 'infrastructure deployment');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
