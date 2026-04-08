const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace email
  content = content.replace(/hello@lotusroom\.studio/g, 'lotusroom.os@gmail.com');

  // Replace footer
  // We need to find the <footer>...</footer> block and replace it.
  // Actually, it might be easier to use regex to remove the specific lines.
  
  content = content.replace(/<li><a href="https:\/\/paystack\.com\/pay\/full-bundle-250" target="_blank">Full Dojo System<\/a><\/li>\s*/g, '');
  content = content.replace(/<li><Link to="\/rooms">All rooms<\/Link><\/li>\s*/g, '');
  
  // Remove the Apply Now column
  const applyNowRegex = /<div>\s*<div className="footer-col-label">Apply Now<\/div>\s*<ul className="footer-links">\s*<li><Link to="\/apply">Foundation<\/Link><\/li>\s*<li><Link to="\/apply">Venture Build<\/Link><\/li>\s*<li><Link to="\/apply">Develop<\/Link><\/li>\s*<li><Link to="\/apply">Studio Partnership<\/Link><\/li>\s*<li><Link to="\/apply">lotusroom\.os@gmail\.com<\/Link><\/li>\s*<\/ul>\s*<\/div>\s*/g;
  content = content.replace(applyNowRegex, '');

  fs.writeFileSync(filePath, content);
}
console.log('Done updating footer and email.');
