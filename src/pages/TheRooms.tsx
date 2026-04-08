
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function TheRooms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-therooms">
      <style>{`
        .page-therooms {
          min-height: 100vh;
        }
        ${ `
    
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{background:var(--cream);color:var(--ink);font-family:var(--fb);font-weight:300;-webkit-font-smoothing:antialiased;}
    body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:9998;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:0.3;mix-blend-mode:multiply;}
    
    /* Page header */
    .page-hero{padding:80px 48px 64px;position:relative;overflow:hidden;}
    .page-hero-art{position:absolute;inset:0;pointer-events:none;}
    .ph-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;}
    .eyebrow{font-family:var(--fm);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(var(--rgb-gold),0.28);padding:5px 12px;display:inline-block;margin-bottom:24px;}
    h1{font-family:var(--fd);font-size:clamp(44px,6vw,72px);font-weight:300;line-height:.95;letter-spacing:-.02em;color:var(--ink);margin-bottom:20px;}
    h1 em{font-style:italic;color:var(--gold);}
    .hero-sub{font-size:16px;font-weight:300;line-height:1.65;color:var(--warm-grey);max-width:520px;}

    /* Room sections */
    .room-section{padding:72px 48px;border-bottom:1px solid rgba(var(--rgb-warm-grey2),0.08);position:relative;}
    .room-section.alt{background:var(--parchment);}
    .room-section.coming-soon{opacity:0.75;}
    .rs-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 380px;gap:80px;align-items:start;}
    .rs-inner.rev{grid-template-columns:380px 1fr;}
    .rs-inner.rev > div:first-child { order: 2; }
    .rs-inner.rev > div:last-child { order: 1; }
    .rs-num{font-family:var(--fm);font-size:9px;letter-spacing:.14em;color:var(--warm-grey);margin-bottom:8px;}
    h2{font-family:var(--fd);font-size:clamp(32px,4.5vw,52px);font-weight:300;line-height:1.0;letter-spacing:-.02em;color:var(--ink);margin-bottom:10px;}
    h2 em{font-style:italic;color:var(--gold);}
    .room-subtitle{font-family:var(--fm);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--warm-grey);margin-bottom:20px;}
    .room-desc{font-size:15px;font-weight:300;line-height:1.72;color:var(--warm-grey2);margin-bottom:28px;}
    .delivers-label{font-family:var(--fm);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--warm-grey);margin-bottom:10px;}
    .delivers-list{display:flex;flex-direction:column;gap:7px;margin-bottom:28px;}
    .delivers-list li{display:flex;align-items:flex-start;gap:9px;font-size:13px;font-weight:300;color:var(--warm-grey2);line-height:1.4;}
    .delivers-list li::before{content:'·';font-family:var(--fm);font-size:10px;color:var(--warm-grey);flex-shrink:0;padding-top:1px;}
    .rule{width:40px;height:1px;background:var(--gold);opacity:0.5;margin:18px 0;}

    /* Price card */
    .price-card{padding:36px 32px;border:1px solid rgba(var(--rgb-warm-grey2),0.14);background:var(--cream);}
    .room-section.alt .price-card{background:var(--cream);}
    .pc-featured{border-color:rgba(var(--rgb-gold),0.35);background:rgba(var(--rgb-gold),0.03);}
    .pc-label{font-family:var(--fm);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--warm-grey);margin-bottom:16px;}
    .pc-featured .pc-label{color:var(--gold);}
    .pc-price{font-family:var(--fd);font-size:60px;font-weight:300;color:var(--ink);line-height:1;letter-spacing:-.04em;margin-bottom:6px;}
    .pc-featured .pc-price{color:var(--gold);}
    .pc-note{font-size:11px;font-weight:300;color:var(--warm-grey);margin-bottom:24px;font-family:var(--fm);}
    .pc-includes{display:flex;flex-direction:column;gap:9px;flex:1;margin-bottom:24px;}
    .pc-row{display:flex;align-items:flex-start;gap:9px;font-size:13px;font-weight:300;color:var(--warm-grey2);line-height:1.4;}
    .pc-row::before{content:'·';color:rgba(var(--rgb-warm-grey),0.40);flex-shrink:0;font-family:var(--fm);font-size:11px;}
    .pc-featured .pc-row{color:var(--warm-grey2);}
    .pc-btn{display:block;padding:14px 24px;border:1px solid rgba(var(--rgb-warm-grey2),0.20);color:var(--warm-grey2);font-family:var(--fb);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;text-align:center;cursor:pointer;text-decoration:none;transition:all .15s;background:transparent;margin-bottom:10px;}
    .pc-btn:hover{border-color:var(--ink);color:var(--ink);}
    .pc-btn.gold{background:rgba(var(--rgb-gold),0.08);border-color:rgba(var(--rgb-gold),0.50);color:var(--gold);}
    .pc-btn.gold:hover{background:var(--gold);color:var(--cream);}
    .tools-list{display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
    .tool-row{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:rgba(var(--rgb-warm-grey2),0.04);border:1px solid rgba(var(--rgb-warm-grey2),0.10);}
    .tool-name{font-size:13px;font-weight:400;color:var(--ink);}
    .tool-desc{font-size:11px;font-weight:300;color:var(--warm-grey);margin-top:2px;}
    .tool-price{font-family:var(--fd);font-size:20px;font-weight:300;color:var(--gold);flex-shrink:0;margin-left:16px;}

    /* Coming soon badge */
    .cs-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--fm);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--warm-grey);border:1px solid rgba(var(--rgb-warm-grey),0.25);padding:4px 12px;margin-bottom:20px;}

    footer{position:relative;z-index:1;padding:56px 48px;display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:48px;align-items:start;border-top:1px solid rgba(var(--rgb-warm-grey2),0.10);}
    .footer-tagline{font-family:var(--fd);font-size:16px;font-weight:300;font-style:italic;color:var(--warm-grey);line-height:1.5;margin-top:10px;}
    .footer-col-label{font-family:var(--fm);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:rgba(var(--rgb-warm-grey),0.55);margin-bottom:14px;}
    .footer-links{list-style:none;display:flex;flex-direction:column;gap:9px;}
    .footer-links a{font-size:13px;font-weight:300;color:var(--warm-grey);text-decoration:none;transition:color .15s;}
    .footer-links a:hover{color:var(--ink);}
    .footer-cta{text-align:right;}
    .footer-cta-text{font-family:var(--fd);font-size:22px;font-weight:300;color:var(--warm-grey);margin-bottom:14px;line-height:1.2;}
    .footer-cta-text em{color:var(--gold);font-style:italic;}
    .footer-copy{grid-column:1/-1;padding-top:28px;border-top:1px solid rgba(var(--rgb-warm-grey2),0.07);display:flex;justify-content:space-between;align-items:center;}
    .footer-copy-text{font-family:var(--fm);font-size:10px;color:var(--warm-grey);letter-spacing:.06em;}
    .full-dojo-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 360px; gap: 80px; align-items: center; }
    @media(max-width:1024px){
      .page-hero,.room-section{padding:56px 20px;}
      footer{padding:40px 20px;}
      .rs-inner,.rs-inner.rev{grid-template-columns:1fr;gap:40px;}
      .rs-inner.rev > div:first-child { order: 1; }
      .rs-inner.rev > div:last-child { order: 2; }
      .full-dojo-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
    }
    @media(max-width:900px){
      footer{grid-template-columns:1fr 1fr;}
      .footer-cta{text-align:left;}
    }
  `.replace(/body/g, `.page-therooms`) }
      `}</style>
      



<div className="page-hero">
  <svg className="page-hero-art" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="ph1" cx="80%" cy="30%" r="60%"><stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.14"/><stop offset="100%" stopColor="transparent"/></radialGradient></defs>
    <rect width="1440" height="400" fill="var(--cream)"/>
    <rect width="1440" height="400" fill="url(#ph1)"/>
    <g opacity="0.05" stroke="var(--warm-grey2)" fill="none" transform="translate(1250,200)">
      <circle cx="0" cy="0" r="100"/><circle cx="0" cy="0" r="150"/><circle cx="0" cy="0" r="190"/>
      <line x1="-190" y1="0" x2="190" y2="0"/><line x1="0" y1="-190" x2="0" y2="190"/>
    </g>
    <g opacity="0.06" stroke="var(--ink)" fill="var(--ink)">
      <line x1="60" y1="120" x2="140" y2="80" strokeWidth="0.5"/><line x1="140" y1="80" x2="200" y2="130" strokeWidth="0.5"/>
      <circle cx="60" cy="120" r="2.5"/><circle cx="140" cy="80" r="2"/><circle cx="200" cy="130" r="3"/>
    </g>
  </svg>
  <div className="ph-inner">
    <div className="eyebrow">Five Rooms</div>
    <h1>One operating system<br /><em>for ventures.</em></h1>
    <p className="hero-sub">One OS. Five rooms. Build, run, and scale your venture with structured packs. All tools are included in each room. Each stage gives you frameworks, checklists, templates, and workflows so founders don’t just learn - they build.</p>
  </div>
</div>


<section className="room-section" id="art-of-brand">
  <div className="rs-inner">
    <div>
      <div className="rs-num">Room 01</div>
      <h2>Art of<br /><em>Brand</em></h2>
      <div className="room-subtitle">AI-driven identity systems for founders. Minimal, structured, ready to scale.</div>
      <p className="room-desc">Build a complete visual and verbal identity in 60 minutes. This system extracts your founder narrative and converts it into a professional brand kit through three structured AI frameworks.</p>
      <div className="rule"></div>
      <div className="delivers-label">The Deliverables</div>
      <ul className="delivers-list">
        <li><strong>Strategy:</strong> Founder story, brand archetype, and positioning statement.</li>
        <li><strong>Visuals:</strong> 6-color palette (hex codes) and Google Font typography pairings.</li>
        <li><strong>Voice:</strong> Brand voice guide with tone words and before/after copy examples.</li>
        <li><strong>Web:</strong> Full site architecture, hero copy, and page-by-page structure.</li>
      </ul>
      <div className="delivers-label">The Process</div>
      <ul className="delivers-list">
        <li><strong>Input:</strong> Complete your Brand Brief.</li>
        <li><strong>Run:</strong> Execute the 3 frameworks in one AI conversation.</li>
        <li><strong>Deploy:</strong> Paste your outputs and launch your brand.</li>
      </ul>
      <div className="tools-list">
        <div className="tool-row" style={{background: "transparent", border: "none", padding: "0"}}>
          <div><div className="tool-name" style={{color: "var(--gold)"}}>Outcome: A complete brand identity, ready to deploy.</div></div>
        </div>
      </div>
      <div style={{fontSize: "11px", color: "var(--warm-grey)", fontFamily: "var(--fm)", letterSpacing: ".06em", marginBottom: "16px"}}>3 Frameworks | 4 Deliverables | 60 Minutes | ∞ Yours forever</div>
      <Link to="/art-of-brand" style={{fontSize: "13px", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid rgba(var(--rgb-gold),0.35)", paddingBottom: "2px"}}>Full product page →</Link>
    </div>
    <div>
      <div className="price-card pc-featured">
        <div className="pc-label">Art of Brand</div>
        <div className="pc-price">$50</div>
        <div className="pc-note">Complete brand identity ready to deploy.</div>
        <a href="https://paystack.com/pay/artofbrand-50" target="_blank" className="pc-btn gold">Buy Room: $50 →</a>
      </div>
    </div>
  </div>
</section>


<section className="room-section alt" id="campfyer">
  <div className="rs-inner rev">
    <div>
      <div className="rs-num">Room 02</div>
      <h2>Camp<em>fyer</em></h2>
      <div className="room-subtitle">The 30-day content engine. One brief, one session, a complete campaign.</div>
      <p className="room-desc">Stop the hashtag guesswork. Campfyer converts a single core insight into a high-converting, 4-week content arc in under 60 minutes. No agency, no revisions, no waiting.</p>
      <div className="rule"></div>
      <div className="delivers-label">The Deliverables</div>
      <ul className="delivers-list">
        <li><strong>Strategy:</strong> 4-week awareness-to-conversion roadmap and contrarian campaign angle.</li>
        <li><strong>Creative:</strong> 5 full carousel scripts (7 slides each) with visual direction and alt-text.</li>
        <li><strong>Copy:</strong> 15 caption variations (Story, Value, Provocative) and 25 story slides.</li>
        <li><strong>Distribution:</strong> 28-day calendar, hashtag sets, and a multi-platform repurpose engine.</li>
      </ul>
      <div className="delivers-label">The Process</div>
      <ul className="delivers-list">
        <li><strong>Brief:</strong> Define your audience, offer, and one core insight.</li>
        <li><strong>Sprint:</strong> Run the 8 frameworks in a single AI conversation.</li>
        <li><strong>Refine:</strong> Paste month-end analytics to sharpen next month's brief automatically.</li>
      </ul>
      <div className="tools-list">
        <div className="tool-row" style={{background: "transparent", border: "none", padding: "0"}}>
          <div><div className="tool-name" style={{color: "var(--gold)"}}>Outcome: A professional 30-day campaign, ready to publish.</div></div>
        </div>
      </div>
      <div style={{fontSize: "11px", color: "var(--warm-grey)", fontFamily: "var(--fm)", letterSpacing: ".06em", marginBottom: "16px"}}>8 Frameworks | 25+ Assets | 60 Minutes | 1 Complete Month</div>
      <Link to="/campfyer" style={{fontSize: "13px", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid rgba(var(--rgb-gold),0.35)", paddingBottom: "2px"}}>Full product page →</Link>
    </div>
    <div>
      <div className="price-card pc-featured">
        <div className="pc-label">Campfyer</div>
        <div className="pc-price">$50</div>
        <div className="pc-note">Complete 30-day content campaign ready to publish.</div>
        <a href="https://paystack.com/pay/campfyer-50" target="_blank" className="pc-btn gold">Buy Room: $50 →</a>
      </div>
    </div>
  </div>
</section>


<section className="room-section coming-soon" id="evo">
  <div className="rs-inner">
    <div>
      <div className="rs-num">Room 03</div>
      <div className="cs-badge">Coming soon</div>
      <h2><em>EVO</em></h2>
      <div className="room-subtitle">Revenue architecture · Growth systems · Automation</div>
      <p className="room-desc">EVO builds the growth infrastructure behind your venture. CAC/LTV modelling, 12-week campaign systems, automation, and the revenue architecture that turns early traction into sustainable growth.</p>
      <div className="rule"></div>
      <ul className="delivers-list">
        <li>Growth model with CAC/LTV projections</li>
        <li>12-week campaign architecture</li>
        <li>Automation stack recommendation</li>
        <li>Revenue architecture document</li>
      </ul>
    </div>
    <div>
      <div className="price-card">
        <div className="pc-label">EVO · AI Frameworks</div>
        <div className="pc-price" style={{color: "var(--warm-grey)"}}>Soon</div>
        <div className="pc-note">join the waitlist for early access</div>
        <Link to="/apply" className="pc-btn">Join the waitlist →</Link>
      </div>
    </div>
  </div>
</section>


<section className="room-section alt coming-soon" id="beat-therapy">
  <div className="rs-inner rev">
    <div>
      <div className="rs-num">Room 04</div>
      <div className="cs-badge">Coming soon</div>
      <h2>Beat<br /><em>Therapy</em></h2>
      <div className="room-subtitle">Creative process · Community · Cultural strategy</div>
      <p className="room-desc">Beat Therapy is for founders building at the intersection of culture and commerce. Creative process systems, community strategy, and the frameworks that help founders build in public without burning out.</p>
      <div className="rule"></div>
      <ul className="delivers-list">
        <li>Creative process system</li>
        <li>Build-in-public content framework</li>
        <li>Community strategy document</li>
        <li>Cultural positioning brief</li>
      </ul>
    </div>
    <div>
      <div className="price-card">
        <div className="pc-label">Beat Therapy · AI Frameworks</div>
        <div className="pc-price" style={{color: "var(--warm-grey)"}}>Soon</div>
        <div className="pc-note">join the waitlist for early access</div>
        <Link to="/apply" className="pc-btn">Join the waitlist →</Link>
      </div>
    </div>
  </div>
</section>


<section className="room-section coming-soon" id="deeper">
  <div className="rs-inner">
    <div>
      <div className="rs-num">Room 05</div>
      <div className="cs-badge">Coming soon</div>
      <h2><em>Deeper</em></h2>
      <div className="room-subtitle">Investor narrative · Positioning · Unit economics</div>
      <p className="room-desc">Deeper is for founders who need to articulate their venture with precision: for investors, partners, and their own clarity. Investor narrative, unit economics, defensibility mapping, and the strategic positioning that makes a venture worth noticing.</p>
      <div className="rule"></div>
      <ul className="delivers-list">
        <li>Investor narrative (10-slide structure)</li>
        <li>Unit economics summary</li>
        <li>Defensibility map</li>
        <li>Strategic positioning statement</li>
      </ul>
    </div>
    <div>
      <div className="price-card">
        <div className="pc-label">Deeper · AI Frameworks</div>
        <div className="pc-price" style={{color: "var(--warm-grey)"}}>Soon</div>
        <div className="pc-note">join the waitlist for early access</div>
        <Link to="/apply" className="pc-btn">Join the waitlist →</Link>
      </div>
    </div>
  </div>
</section>


<section style={{background: "var(--parchment)", padding: "72px 48px", borderBottom: "1px solid rgba(var(--rgb-warm-grey2),0.08)"}}>
  <div className="full-dojo-grid">
    <div>
      <div style={{fontFamily: "var(--fm)", fontSize: "9px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--warm-grey)", marginBottom: "16px"}}>// The complete system</div>
      <h2>The Full Dojo<br /><em>System</em></h2>
      <div style={{width: "40px", height: "1px", background: "var(--gold)", opacity: "0.5", margin: "18px 0"}}></div>
      <p style={{fontSize: "15px", fontWeight: "300", lineHeight: "1.72", color: "var(--warm-grey2)", marginBottom: "24px"}}>All 5 rooms when complete. First access to every new room as it releases. The complete operating system for your venture once, yours forever.</p>
    </div>
    <div className="price-card" style={{borderColor: "rgba(var(--rgb-gold),0.35)", background: "rgba(var(--rgb-gold),0.03)"}}>
      <div style={{fontFamily: "var(--fm)", fontSize: "9px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px"}}>Full Dojo System</div>
      <div className="pc-price">$250</div>
      <div style={{fontSize: "11px", fontWeight: "300", color: "var(--warm-grey)", marginBottom: "24px", fontFamily: "var(--fm)"}}>one-time · all 5 rooms · first access to new rooms</div>
      <div className="pc-includes">
        <div className="pc-row">Art of Brand</div>
        <div className="pc-row">Campfyer</div>
        <div className="pc-row">EVO: on release</div>
        <div className="pc-row">Beat Therapy: on release</div>
        <div className="pc-row">Deeper: on release</div>
        <div className="pc-row">Community access</div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
