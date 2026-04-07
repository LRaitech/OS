const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Removed comments from ${file}`);
});
