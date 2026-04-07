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

const navLinksHtml = `<ul className="nav-links">
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/rooms">The Rooms ✦</Link></li>
    <li><Link to="/dojo">The Dojo ✦</Link></li>
    <li><a href="https://lotusroomos.substack.com/" target="_blank" rel="noopener noreferrer">Insights ✦ [Read on Substack ↗]</a></li>
    <li><Link to="/contact">Get in Touch</Link></li>
  </ul>`;

const logoHtml = `<Link to="/" className="nav-logo">
    <div className="nav-mark" style={{ border: 'none' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M12 20C12 20 4 15 4 9C4 6.8 5.8 5 8 5C9.6 5 11 5.8 12 7C13 5.8 14.4 5 16 5C18.2 5 20 6.8 20 9C20 15 12 20 12 20Z" stroke="#B8860B" strokeWidth="1" fill="none"/>
        <path d="M12 20C12 20 9 17 9 13C9 11.3 10.3 10 12 10C13.7 10 15 11.3 15 13C15 17 12 20 12 20Z" stroke="#B8860B" strokeWidth="0.8" fill="none"/>
      </svg>
    </div>
    <span className="nav-wordmark" style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>Lotus Room</span>
  </Link>`;

const backBtnHtml = `<Link to="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', border: '1px solid rgba(139,115,85,0.25)', padding: '4px 8px', color: 'var(--warm-grey)', textDecoration: 'none', marginRight: '16px', letterSpacing: '0.05em' }}>[ ← Back ]</Link>`;

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace tools/prompts
    content = content.replace(/(?<![-a-zA-Z])tools(?![-a-zA-Z])/g, 'AI Frameworks');
    content = content.replace(/(?<![-a-zA-Z])Tools(?![-a-zA-Z])/g, 'AI Frameworks');
    content = content.replace(/(?<![-a-zA-Z])tool(?![-a-zA-Z])/g, 'AI Framework');
    content = content.replace(/(?<![-a-zA-Z])Tool(?![-a-zA-Z])/g, 'AI Framework');
    
    content = content.replace(/(?<![-a-zA-Z])prompts(?![-a-zA-Z])/gi, 'AI Frameworks');
    content = content.replace(/(?<![-a-zA-Z])prompt(?![-a-zA-Z])/gi, 'AI Framework');

    // Restore class names that might have been affected (just in case, though the regex should prevent it)
    content = content.replace(/AI Frameworks-list/g, 'tools-list');
    content = content.replace(/AI Framework-row/g, 'tool-row');
    content = content.replace(/AI Frameworks-r/g, 'tools-r');
    content = content.replace(/AI Frameworks-grid/g, 'tools-grid');
    content = content.replace(/AI Framework-name/g, 'tool-name');
    content = content.replace(/AI Framework-desc/g, 'tool-desc');
    content = content.replace(/AI Framework-price/g, 'tool-price');

    // Replace Nav Links
    content = content.replace(/<ul className="nav-links">[\s\S]*?<\/ul>/, navLinksHtml);

    // Replace CTA in nav
    content = content.replace(/<div className="nav-cta">[\s\S]*?<\/div>/, '');
    content = content.replace(/<div><Link to="\/rooms" className="btn-nav">Start at \$15 →<\/Link><\/div>/, '');
    content = content.replace(/<div><a href="https:\/\/paystack\.com\/pay\/brand-core-15" target="_blank" className="btn-nav">Start at \$15 →<\/a><\/div>/, '');

    // Replace Logo
    content = content.replace(/<Link to="\/" className="nav-logo"[\s\S]*?<span className="nav-wordmark".*?>.*?<\/span>\s*<\/Link>/, logoHtml);

    // Add Back Button to sub-pages
    if (!file.endsWith('Home.tsx')) {
      if (!content.includes('[ ← Back ]')) {
        content = content.replace(/<nav>/, '<nav>\n  <div style={{ display: "flex", alignItems: "center" }}>\n    ' + backBtnHtml);
        content = content.replace(/(<span className="nav-wordmark".*?>.*?<\/span>\s*<\/Link>)/, '$1\n  </div>');
      }
    }

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
