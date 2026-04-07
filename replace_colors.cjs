const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const replacements = [
  // Hex colors
  { regex: /#F0EBE1/gi, replacement: 'var(--cream)' },
  { regex: /#E8E0D4/gi, replacement: 'var(--cream-deep)' },
  { regex: /#F7F4EF/gi, replacement: 'var(--parchment)' },
  { regex: /#1A1714/gi, replacement: 'var(--ink)' },
  { regex: /#2A2218/gi, replacement: 'var(--ink-soft)' },
  { regex: /#B8860B/gi, replacement: 'var(--gold)' },
  { regex: /#D4A84B/gi, replacement: 'var(--gold-light)' },
  { regex: /#E8C97A/gi, replacement: 'var(--gold-pale)' },
  { regex: /#8B7355/gi, replacement: 'var(--warm-grey)' },
  { regex: /#5A4A35/gi, replacement: 'var(--warm-grey2)' },
  { regex: /#2A1F14/gi, replacement: 'var(--ink)' },
  { regex: /#14120F/gi, replacement: 'var(--parchment)' },
  { regex: /#FFFFFF/gi, replacement: 'var(--cream)' },
  // Campfyer specific hex
  { regex: /#C8701A/gi, replacement: 'var(--gold)' },
  { regex: /#2C5F5A/gi, replacement: 'var(--warm-grey2)' },
  { regex: /#090f0d/gi, replacement: 'var(--ink)' },
  { regex: /#E8C07A/gi, replacement: 'var(--gold-pale)' },
  { regex: /#D4983A/gi, replacement: 'var(--gold-light)' },
  { regex: /#1A3D3A/gi, replacement: 'var(--warm-grey2)' },

  // RGBA colors
  { regex: /rgba\(\s*240\s*,\s*235\s*,\s*225\s*,/g, replacement: 'rgba(var(--rgb-cream),' },
  { regex: /rgba\(\s*26\s*,\s*23\s*,\s*20\s*,/g, replacement: 'rgba(var(--rgb-ink),' },
  { regex: /rgba\(\s*184\s*,\s*134\s*,\s*11\s*,/g, replacement: 'rgba(var(--rgb-gold),' },
  { regex: /rgba\(\s*212\s*,\s*168\s*,\s*75\s*,/g, replacement: 'rgba(var(--rgb-gold-dark),' },
  { regex: /rgba\(\s*139\s*,\s*115\s*,\s*85\s*,/g, replacement: 'rgba(var(--rgb-warm-grey),' },
  { regex: /rgba\(\s*90\s*,\s*74\s*,\s*53\s*,/g, replacement: 'rgba(var(--rgb-warm-grey2),' },
  
  // Campfyer specific RGBA
  { regex: /rgba\(\s*13\s*,\s*20\s*,\s*18\s*,/g, replacement: 'rgba(var(--rgb-ink),' },
  { regex: /rgba\(\s*242\s*,\s*237\s*,\s*230\s*,/g, replacement: 'rgba(var(--rgb-cream),' },
  { regex: /rgba\(\s*200\s*,\s*112\s*,\s*26\s*,/g, replacement: 'rgba(var(--rgb-gold),' },
  { regex: /rgba\(\s*212\s*,\s*152\s*,\s*58\s*,/g, replacement: 'rgba(var(--rgb-gold-dark),' },
  { regex: /rgba\(\s*44\s*,\s*95\s*,\s*90\s*,/g, replacement: 'rgba(var(--rgb-warm-grey2),' },
  { regex: /rgba\(\s*26\s*,\s*61\s*,\s*58\s*,/g, replacement: 'rgba(var(--rgb-warm-grey2),' },
  { regex: /rgba\(\s*42\s*,\s*20\s*,\s*5\s*,/g, replacement: 'rgba(var(--rgb-warm-grey),' },

  // Undefined variables in Campfyer
  { regex: /var\(--teal\)/g, replacement: 'var(--warm-grey2)' },
  { regex: /var\(--teal-d\)/g, replacement: 'var(--ink)' },
  { regex: /var\(--ochre-p\)/g, replacement: 'var(--gold-light)' },
  { regex: /var\(--ochre\)/g, replacement: 'var(--gold)' },
  { regex: /var\(--amber\)/g, replacement: 'var(--gold-pale)' },
];

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });

    // Also fix any hardcoded style objects that might have missed the regex
    // e.g. style={{background: "#1A1714"}} -> style={{background: "var(--ink)"}}
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
