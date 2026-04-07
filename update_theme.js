const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/ArtOfBrand.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace CSS variables
content = content.replace(
  /--cream:\s*#F0EBE1;/,
  '--cream:      #1A1714;'
);
content = content.replace(
  /--cream-deep:\s*#E8E0D4;/,
  '--cream-deep: #2A2218;'
);
content = content.replace(
  /--parchment:\s*#F7F4EF;/,
  '--parchment:  #14120F;'
);
content = content.replace(
  /--ink:\s*#1A1714;/,
  '--ink:        #F0EBE1;'
);
content = content.replace(
  /--ink-soft:\s*#2A2218;/,
  '--ink-soft:   #E8E0D4;'
);
content = content.replace(
  /--gold:\s*#B8860B;/,
  '--gold:       #D4A84B;'
);
content = content.replace(
  /--gold-light:\s*#D4A84B;/,
  '--gold-light: #E8C97A;'
);
content = content.replace(
  /--gold-pale:\s*#E8C97A;/,
  '--gold-pale:  #F2E2B8;'
);
content = content.replace(
  /--gold-dim:\s*rgba\(184,134,11,0\.18\);/,
  '--gold-dim:   rgba(212,168,75,0.18);'
);
content = content.replace(
  /--gold-thin:\s*rgba\(184,134,11,0\.10\);/,
  '--gold-thin:  rgba(212,168,75,0.10);'
);
content = content.replace(
  /--warm-grey:\s*#8B7355;/,
  '--warm-grey:  #A89B8C;'
);
content = content.replace(
  /--warm-grey2:\s*#5A4A35;/,
  '--warm-grey2: #C4B8A8;'
);

// 2. Replace rgba values
content = content.replace(/rgba\((240,235,225|90,74,53|184,134,11|139,115,85|26,23,20),/g, (match, p1) => {
  if (p1 === '240,235,225') return 'rgba(26,23,20,';
  if (p1 === '90,74,53') return 'rgba(240,235,225,';
  if (p1 === '184,134,11') return 'rgba(212,168,75,';
  if (p1 === '139,115,85') return 'rgba(240,235,225,';
  if (p1 === '26,23,20') return 'rgba(240,235,225,';
  return match;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Theme updated successfully.');
