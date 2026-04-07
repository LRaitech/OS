const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const filesToFix = ['Campfyer.tsx', 'Dojo.tsx', 'ArtOfBrand.tsx'];

filesToFix.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix body/page class background and color
    content = content.replace(/background:\s*var\(--ink\);\s*color:\s*var\(--cream\);/g, 'background: var(--cream); color: var(--ink);');
    
    // Fix specific inverted sections
    if (file === 'Campfyer.tsx') {
      content = content.replace(/fill="var\(--ink\)"/g, 'fill="var(--cream)"');
      content = content.replace(/color:\s*var\(--cream\)/g, 'color: var(--ink)');
      content = content.replace(/color:\s*rgba\(var\(--rgb-cream\)/g, 'color: rgba(var(--rgb-ink)');
      content = content.replace(/border-bottom:\s*1px solid rgba\(var\(--rgb-cream\)/g, 'border-bottom: 1px solid rgba(var(--rgb-ink)');
      content = content.replace(/border:\s*1px solid rgba\(var\(--rgb-cream\)/g, 'border: 1px solid rgba(var(--rgb-ink)');
      content = content.replace(/background:\s*rgba\(var\(--rgb-cream\)/g, 'background: rgba(var(--rgb-ink)');
    }

    if (file === 'Dojo.tsx') {
      content = content.replace(/\.hero \{([^}]*)background:\s*var\(--ink\);([^}]*)color:\s*var\(--cream\);/g, '.hero {$1background: var(--cream);$2color: var(--ink);');
      content = content.replace(/\.hero h1 \{([^}]*)color:\s*var\(--cream\);/g, '.hero h1 {$1color: var(--ink);');
      content = content.replace(/color:\s*rgba\(var\(--rgb-cream\)/g, 'color: rgba(var(--rgb-ink)');
    }

    if (file === 'ArtOfBrand.tsx') {
      content = content.replace(/fill="#14120F"/g, 'fill="var(--cream)"');
      content = content.replace(/fill="var\(--parchment\)"/g, 'fill="var(--cream)"');
      content = content.replace(/color:\s*"#FFFFFF"/g, 'color: "var(--ink)"');
      content = content.replace(/color:\s*"var\(--cream\)"/g, 'color: "var(--ink)"');
      content = content.replace(/color:\s*"#E8E0D4"/g, 'color: "var(--ink-soft)"');
      content = content.replace(/color:\s*"var\(--cream-deep\)"/g, 'color: "var(--ink-soft)"');
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed inversions in ${file}`);
  }
});
