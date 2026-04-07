import fs from 'fs';

let content = fs.readFileSync('./src/pages/WorkWithUs.tsx', 'utf8');
content = content.replace(/<div className="sc-amount">\$2,500<\/div>/g, '');
content = content.replace(/<div className="eg-price">\$2,500<\/div>/g, '');
content = content.replace(/<div className="eg-price">\$8,000<\/div>/g, '');
content = content.replace(/<div className="eg-price">\$12,000<\/div>/g, '');
content = content.replace(/<div className="eg-price">Custom \/ Capital<\/div>/g, '');
content = content.replace(/Start with a <em>\$15 AI Framework<\/em> and build yourself\./g, 'Start with an <em>AI Framework</em> and build yourself.');
fs.writeFileSync('./src/pages/WorkWithUs.tsx', content, 'utf8');

let roomsContent = fs.readFileSync('./src/pages/TheRooms.tsx', 'utf8');
roomsContent = roomsContent.replace(/<div style={{fontFamily: "var\(--fd\)", fontSize: "60px", fontWeight: "300", color: "var\(--gold\)", lineHeight: "1", letterSpacing: "-\.04em", marginBottom: "6px"}}>\$99<\/div>/g, '');
roomsContent = roomsContent.replace(/<div className="tool-price">\$15<\/div>/g, '');
roomsContent = roomsContent.replace(/<div className="tool-price">\$59<\/div>/g, '');
roomsContent = roomsContent.replace(/Buy now: \$99 →/g, 'Buy now →');
fs.writeFileSync('./src/pages/TheRooms.tsx', roomsContent, 'utf8');

let artContent = fs.readFileSync('./src/pages/ArtOfBrand.tsx', 'utf8');
artContent = artContent.replace(/<div className="tool-price">\$15<\/div>/g, '');
artContent = artContent.replace(/<div className="tool-price">\$59<\/div>/g, '');
fs.writeFileSync('./src/pages/ArtOfBrand.tsx', artContent, 'utf8');

let campContent = fs.readFileSync('./src/pages/Campfyer.tsx', 'utf8');
campContent = campContent.replace(/<div className="tool-price">\$15<\/div>/g, '');
campContent = campContent.replace(/<div className="tool-price">\$59<\/div>/g, '');
fs.writeFileSync('./src/pages/Campfyer.tsx', campContent, 'utf8');
