const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We need to match <a ...>...</a> and <Link ...>...</Link>
  // Since we already replaced all </a> with </Link>, we have <a ...>...</Link>
  // We can just replace </Link> with </a> if the corresponding opening tag was <a>.
  // A simpler way: replace all </Link> with </a>, then replace </a> with </Link> ONLY if the opening tag is <Link>
  
  // Actually, let's just do:
  content = content.replace(/<a([^>]*)>([\s\S]*?)<\/Link>/g, '<a$1>$2</a>');
  
  // Also, there are some onmouseover/onmouseout attributes in ArtOfBrand.tsx that need to be camelCase
  content = content.replace(/onmouseover=/g, 'onMouseOver=');
  content = content.replace(/onmouseout=/g, 'onMouseOut=');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});
