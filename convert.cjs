const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(html, componentName) {
  // Extract style block
  let styleContent = '';
  html = html.replace(/<style>([\s\S]*?)<\/style>/, (match, p1) => {
    styleContent = p1;
    return '';
  });

  // Extract body content
  let bodyContent = '';
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  } else {
    bodyContent = html;
  }

  // Convert class to className
  let jsx = bodyContent.replace(/class=/g, 'className=');

  // Convert inline styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (key && value) {
        const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')}}}`;
  });

  // Convert SVG attributes
  const svgAttrs = [
    'viewBox', 'fill-rule', 'clip-rule', 'stroke-width', 'stroke-linecap',
    'stroke-linejoin', 'stroke-miterlimit', 'stop-color', 'stop-opacity'
  ];
  svgAttrs.forEach(attr => {
    const camelAttr = attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    jsx = jsx.replace(new RegExp(`${attr}=`, 'g'), `${camelAttr}=`);
  });

  // Self-close tags
  const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'circle', 'rect', 'line', 'path', 'ellipse', 'stop'];
  voidTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });

  // Replace links
  jsx = jsx.replace(/<a href="index\.html"/g, '<Link to="/"');
  jsx = jsx.replace(/<a href="contact\.html"/g, '<Link to="/contact"');
  jsx = jsx.replace(/<a href="rooms\.html"/g, '<Link to="/rooms"');
  jsx = jsx.replace(/<a href="room-campfyer\.html"/g, '<Link to="/campfyer"');
  jsx = jsx.replace(/<a href="room-art-of-brand\.html"/g, '<Link to="/art-of-brand"');
  jsx = jsx.replace(/<a href="dojo\.html"/g, '<Link to="/dojo"');
  jsx = jsx.replace(/<a href="carousels\.html"/g, '<Link to="/campfyer"');
  jsx = jsx.replace(/<\/a>/g, '</Link>');

  // Specific replacements for Campfyer
  if (componentName === 'Campfyer') {
    jsx = jsx.replace(/Hashtag strategy/g, 'Repurpose Engine');
    jsx = jsx.replace(/30 hashtags across 3 tiers — niche, mid, and reach\. 3 branded hashtag suggestions\. Usage guide for carousels vs stories\. One to avoid and why\./g, 'AI prompts to repurpose your content across 5 different platforms. Turn one carousel into a newsletter, a Twitter thread, a LinkedIn post, and short-form video scripts.');
    jsx = jsx.replace(/30 hashtags tiered/g, '5 platform formats');
    jsx = jsx.replace(/3 branded options/g, 'Tone-matched copy');
    jsx = jsx.replace(/carousel vs story split/g, 'Platform-specific hooks');
    jsx = jsx.replace(/monthly refresh prompt/g, 'Endless content loop');
  }

  // Wrap in component
  const componentCode = `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-${componentName.toLowerCase()}">
      <style>{\`
        .page-${componentName.toLowerCase()} {
          min-height: 100vh;
        }
        \${ \`${styleContent}\`.replace(/body/g, \`.page-${componentName.toLowerCase()}\`) }
      \`}</style>
      ${jsx}
    </div>
  );
}
`;

  return componentCode;
}

const files = [
  { name: 'Home', file: 'index.html' },
  { name: 'WorkWithUs', file: 'contact.html' },
  { name: 'TheRooms', file: 'rooms.html' },
  { name: 'Campfyer', file: 'room-campfyer.html' },
  { name: 'ArtOfBrand', file: 'room-art-of-brand.html' },
  { name: 'Investor', file: 'investor.html' }
];

files.forEach(({ name, file }) => {
  const htmlPath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const jsx = convertHtmlToJsx(html, name);
    fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${name}.tsx`), jsx);
    console.log(`Converted ${file} to ${name}.tsx`);
  }
});
