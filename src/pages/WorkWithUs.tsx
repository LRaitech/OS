
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WorkWithUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-workwithus">
      <style>{`
        .page-workwithus {
          min-height: 100vh;
        }
        ${ `
    :root{--cream:#F0EBE1;--parchment:#F7F4EF;--ink:#1A1714;--gold:#B8860B;--gold-thin:rgba(184,134,11,0.10);--warm-grey:#8B7355;--warm-grey2:#5A4A35;--fd:'Cormorant Garamond',Georgia,serif;--fb:'DM Sans',system-ui,sans-serif;--fm:'DM Mono',monospace;}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{background:var(--cream);color:var(--ink);font-family:var(--fb);font-weight:300;-webkit-font-smoothing:antialiased;}
    body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:9998;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");opacity:0.3;mix-blend-mode:multiply;}
    nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:16px 48px;background:rgba(240,235,225,0.94);backdrop-filter:blur(14px);border-bottom:1px solid rgba(90,74,53,0.10);}
    .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;}
    .nav-mark{width:32px;height:32px;border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;}
    .nav-wordmark{font-family:var(--fd);font-size:16px;font-weight:300;color:var(--ink);letter-spacing:.06em;}
    .nav-links{display:flex;align-items:center;gap:28px;list-style:none;}
    .nav-links a{font-size:11px;font-weight:400;color:var(--warm-grey);text-decoration:none;letter-spacing:.08em;text-transform:uppercase;transition:color .15s;}
    .nav-links a:hover,.nav-links a.active{color:var(--ink);}
    .btn-nav{padding:8px 22px;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:var(--fb);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
    .btn-nav:hover{background:var(--gold);color:var(--cream);}

    /* Hero */
    .contact-hero{padding:80px 48px;position:relative;overflow:hidden;border-bottom:1px solid rgba(90,74,53,0.08);}
    .ch-art{position:absolute;inset:0;pointer-events:none;}
    .ch-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 400px;gap:80px;align-items:start;}
    .eyebrow{font-family:var(--fm);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(184,134,11,0.28);padding:5px 12px;display:inline-block;margin-bottom:24px;}
    h1{font-family:var(--fd);font-size:clamp(44px,6vw,72px);font-weight:300;line-height:.95;letter-spacing:-.02em;color:var(--ink);margin-bottom:20px;}
    h1 em{font-style:italic;color:var(--gold);}
    .hero-sub{font-size:16px;font-weight:300;line-height:1.7;color:var(--warm-grey);margin-bottom:28px;max-width:480px;}
    .rule{width:40px;height:1px;background:var(--gold);opacity:0.5;margin:18px 0;}
    .flow-list{display:flex;flex-direction:column;gap:0;margin-top:24px;}
    .flow-step{display:flex;gap:18px;padding:14px 0;border-bottom:1px solid rgba(90,74,53,0.07);}
    .flow-step:last-child{border-bottom:none;}
    .flow-n{font-family:var(--fd);font-size:28px;font-weight:300;color:rgba(184,134,11,0.4);flex-shrink:0;width:28px;line-height:1;}
    .flow-text{font-size:13px;font-weight:300;color:var(--warm-grey2);line-height:1.55;padding-top:4px;}

    /* Price cards */
    .sprint-card{padding:40px;border:1px solid rgba(184,134,11,0.30);background:var(--parchment);}
    .sc-amount{font-family:var(--fd);font-size:72px;font-weight:300;color:var(--gold);letter-spacing:-.04em;line-height:1;margin-bottom:6px;}
    .sc-note{font-family:var(--fm);font-size:10px;color:var(--warm-grey);letter-spacing:.08em;margin-bottom:24px;}
    .sc-includes{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;}
    .sc-includes li{font-size:13px;font-weight:300;color:var(--warm-grey2);display:flex;align-items:center;gap:8px;}
    .sc-includes li::before{content:'';width:3px;height:3px;border-radius:50%;background:var(--gold);flex-shrink:0;}
    .btn-primary{display:block;padding:15px 24px;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:var(--fb);font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;text-align:center;transition:all .2s;margin-bottom:10px;}
    .btn-primary:hover{background:var(--gold);color:var(--cream);}

    /* Engagements */
    .engagements{padding:72px 48px;border-bottom:1px solid rgba(90,74,53,0.08);}
    .eg-inner{max-width:1100px;margin:0 auto;}
    .s-kicker{font-family:var(--fm);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--warm-grey);margin-bottom:16px;}
    h2{font-family:var(--fd);font-size:clamp(32px,4.5vw,48px);font-weight:300;line-height:1.0;letter-spacing:-.02em;color:var(--ink);margin-bottom:48px;}
    h2 em{font-style:italic;color:var(--gold);}
    .eg-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
    .eg-card{padding:32px;border:1px solid rgba(90,74,53,0.12);background:var(--cream);transition:border-color .2s;}
    .eg-card:hover{border-color:rgba(184,134,11,0.35);}
    .eg-price{font-family:var(--fd);font-size:40px;font-weight:300;color:var(--gold);line-height:1;letter-spacing:-.03em;margin-bottom:6px;}
    .eg-range{font-family:var(--fm);font-size:10px;font-weight:300;color:var(--warm-grey);letter-spacing:.06em;margin-bottom:18px;}
    .eg-name{font-family:var(--fd);font-size:22px;font-weight:300;color:var(--ink);margin-bottom:8px;}
    .eg-desc{font-size:13px;font-weight:300;color:var(--warm-grey);line-height:1.6;margin-bottom:20px;}
    .eg-list{list-style:none;display:flex;flex-direction:column;gap:7px;margin-bottom:24px;}
    .eg-list li{font-size:12px;font-weight:300;color:var(--warm-grey2);display:flex;gap:8px;line-height:1.4;}
    .eg-list li::before{content:'·';font-family:var(--fm);font-size:10px;color:var(--warm-grey);flex-shrink:0;}
    .eg-cta{display:block;padding:11px 18px;background:transparent;border:1px solid rgba(90,74,53,0.20);color:var(--warm-grey2);font-family:var(--fb);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;text-align:center;transition:all .15s;}
    .eg-cta:hover{border-color:var(--gold);color:var(--gold);}

    /* AI Frameworks reminder */
    .tools-reminder{padding:64px 48px;background:var(--parchment);}
    .tr-inner{max-width:1100px;margin:0 auto;text-align:center;}
    .tr-text{font-family:var(--fd);font-size:28px;font-weight:300;color:var(--warm-grey);line-height:1.4;margin-bottom:24px;}
    .tr-text em{font-style:italic;color:var(--gold);}

    footer{padding:56px 48px;display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:48px;align-items:start;border-top:1px solid rgba(90,74,53,0.10);}
    .footer-tagline{font-family:var(--fd);font-size:16px;font-weight:300;font-style:italic;color:var(--warm-grey);line-height:1.5;margin-top:10px;}
    .footer-col-label{font-family:var(--fm);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:rgba(139,115,85,0.55);margin-bottom:14px;}
    .footer-links{list-style:none;display:flex;flex-direction:column;gap:9px;}
    .footer-links a{font-size:13px;font-weight:300;color:var(--warm-grey);text-decoration:none;transition:color .15s;}
    .footer-links a:hover{color:var(--ink);}
    .footer-cta{text-align:right;}
    .footer-cta-text{font-family:var(--fd);font-size:22px;font-weight:300;color:var(--warm-grey);margin-bottom:14px;line-height:1.2;}
    .footer-cta-text em{color:var(--gold);font-style:italic;}
    .footer-copy{grid-column:1/-1;padding-top:28px;border-top:1px solid rgba(90,74,53,0.07);display:flex;justify-content:space-between;align-items:center;}
    .footer-copy-text{font-family:var(--fm);font-size:10px;color:var(--warm-grey);letter-spacing:.06em;}
    @media(max-width:1024px){
      nav{padding:14px 20px;}
      .contact-hero,.engagements,.tools-reminder{padding:56px 20px;}
      footer{padding:40px 20px;}
      .ch-inner{grid-template-columns:1fr;gap:40px;}
      .eg-grid{grid-template-columns:1fr;}
    }
    @media(max-width:900px){
      .nav-links{display:none;}
      footer{grid-template-columns:1fr 1fr;}
      .footer-cta{text-align:left;}
    }
  `.replace(/body/g, `.page-workwithus`) }
      `}</style>
      

<nav>
  <div style={{ display: "flex", alignItems: "center" }}>
    <Link to="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', border: '1px solid rgba(139,115,85,0.25)', padding: '4px 8px', color: 'var(--warm-grey)', textDecoration: 'none', marginRight: '16px', letterSpacing: '0.05em' }}>[ ← Back ]</Link>
  <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
    <span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
  </Link>
  </div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/rooms">Rooms</Link></li>
    <li><Link to="/dojo">Dojo</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
  
</nav>

<div className="contact-hero">
  <svg className="ch-art" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cg1" cx="90%" cy="10%" r="55%"><stop offset="0%" stopColor="#D4A84B" stopOpacity="0.16"/><stop offset="100%" stopColor="transparent"/></radialGradient></defs>
    <rect width="1440" height="700" fill="var(--cream)"/>
    <rect width="1440" height="700" fill="url(#cg1)"/>
    <g opacity="0.05" stroke="#5A4A35" fill="none" transform="translate(1300,300)">
      <circle cx="0" cy="0" r="120"/><circle cx="0" cy="0" r="180"/><circle cx="0" cy="0" r="220"/>
      <line x1="-220" y1="0" x2="220" y2="0"/><line x1="0" y1="-220" x2="0" y2="220"/>
      <line x1="-155" y1="-155" x2="155" y2="155"/><line x1="155" y1="-155" x2="-155" y2="155"/>
    </g>
    <g opacity="0.07" stroke="#2A1F14" fill="#2A1F14">
      <line x1="80" y1="300" x2="160" y2="250" strokeWidth="0.5"/>
      <line x1="160" y1="250" x2="220" y2="310" strokeWidth="0.5"/>
      <line x1="220" y1="310" x2="290" y2="270" strokeWidth="0.5"/>
      <circle cx="80" cy="300" r="2.5"/><circle cx="160" cy="250" r="2"/><circle cx="220" cy="310" r="3"/><circle cx="290" cy="270" r="1.5"/>
    </g>
  </svg>
  <div className="ch-inner">
    <div>
      <div className="eyebrow">Strategy track · High-touch</div>
      <h1>Build with us<br /><em>directly.</em></h1>
      <p className="hero-sub">We apply the Dojo System with our judgment in the room. Not a template: a partnership. For founders building ventures worth noticing.</p>
      <div className="rule"></div>
      <p style={{fontSize: "14px", fontWeight: "300", color: "var(--warm-grey)", lineHeight: "1.7", marginBottom: "28px"}}>Foundation is where most clients begin. Clarity before scale. Define your idea, audience, and cultural position. Build your narrative, structure, and strategic base.</p>
      <Link to="/apply" className="btn-primary" style={{display: "inline-block", padding: "15px 40px", background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--fb)", fontSize: "11px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", transition: "all .2s"}}>Start the conversation →</Link>
      <div className="flow-list" style={{marginTop: "32px"}}>
        <div className="flow-step"><div className="flow-n">01</div><div className="flow-text">Email us or book a 30-min call: no pitch, just conversation</div></div>
        <div className="flow-step"><div className="flow-n">02</div><div className="flow-text">Brief assessment: we understand your stage, goals, constraints</div></div>
        <div className="flow-step"><div className="flow-n">03</div><div className="flow-text">We propose the right engagement: Sprint, Build, or Partnership</div></div>
        <div className="flow-step"><div className="flow-n">04</div><div className="flow-text">Project activation: deliverables, timeline, everything agreed upfront</div></div>
      </div>
    </div>
    <div>
      <div className="sprint-card">
        
        <div className="sc-note">Foundation: Clarity - $500</div>
        <ul className="sc-includes">
          <li>Early-stage clarity</li>
          <li>Narrative foundations</li>
          <li>Brand structure</li>
        </ul>
        <Link to="/apply" className="btn-primary">Apply for Foundation →</Link>
        <Link to="/apply" className="btn-primary" style={{borderColor: "rgba(90,74,53,0.25)", color: "var(--warm-grey2)"}}>Just say hello →</Link>
        <div style={{marginTop: "12px", textAlign: "center", fontSize: "11px", fontWeight: "300", color: "var(--warm-grey)", fontFamily: "var(--fm)", letterSpacing: ".06em"}}>hello@lotusroom.studio</div>
      </div>
    </div>
  </div>
</div>


<div className="engagements">
  <div className="eg-inner">
    <div className="s-kicker">// All strategy engagements</div>
    <h2>Four levels.<br /><em>One methodology.</em></h2>
    <div className="eg-grid">
      <div className="eg-card">
        
        <div className="eg-range">Foundation: Clarity - $500</div>
        <div className="eg-name">Foundation</div>
        <div className="eg-desc">Define your idea, audience, and cultural position. Build your narrative, structure, and strategic base.</div>
        <ul className="eg-list">
          <li>Early-stage clarity</li>
          <li>Narrative foundations</li>
          <li>Brand structure</li>
        </ul>
        <Link to="/apply" className="eg-cta">Apply for Foundation →</Link>
      </div>
      <div className="eg-card">
        
        <div className="eg-range">Venture Build · 6 weeks</div>
        <div className="eg-name">Build</div>
        <div className="eg-desc">MVP creation, Offer design, Landing page, Customer testing system, Content ecosystem, 3 rooms applied in depth, Full delivery - brand, campaign, growth.</div>
        <ul className="eg-list">
          <li>MVP creation & Offer design</li>
          <li>Landing page</li>
          <li>Customer testing system</li>
          <li>Content ecosystem</li>
          <li>3 rooms applied in depth</li>
          <li>Full delivery - brand, campaign, growth</li>
        </ul>
        <Link to="/apply" className="eg-cta">Start a conversation →</Link>
      </div>
      <div className="eg-card">
        
        <div className="eg-range">Develop · Weeks 7 to 9</div>
        <div className="eg-name">Refine & Systematize</div>
        <div className="eg-desc">Full operational structure across brand, campaign, growth; Refined deliverables for execution/investor presentation; Optimized customer testing systems & content flows; Optional strategy consultation.</div>
        <ul className="eg-list">
          <li>Full operational structure</li>
          <li>Refined deliverables for execution/investor presentation</li>
          <li>Optimized customer testing systems & content flows</li>
          <li>Optional strategy consultation</li>
        </ul>
        <Link to="/apply" className="eg-cta">Start a conversation →</Link>
      </div>
      <div className="eg-card">
        
        <div className="eg-range">Studio Partnership · 3 months</div>
        <div className="eg-name">Scale & Investment</div>
        <div className="eg-desc">All 5 rooms applied, Embedded strategy team, Investor narrative + pitch prep, Revenue systems + automation, 3-month partnership.</div>
        <ul className="eg-list">
          <li>All 5 rooms applied</li>
          <li>Embedded strategy team</li>
          <li>Investor narrative + pitch prep</li>
          <li>Revenue systems + automation</li>
          <li>3-month partnership</li>
        </ul>
        <Link to="/apply" className="eg-cta">Start a conversation →</Link>
      </div>
    </div>
  </div>
</div>


<div className="tools-reminder">
  <div className="tr-inner">
    <div className="tr-text">Not ready for strategy?<br />Start with an <em>AI Framework</em> and build yourself.</div>
    <Link to="/rooms" style={{display: "inline-block", padding: "15px 40px", background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--fb)", fontSize: "11px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", transition: "all .2s"}}>Explore the Rooms →</Link>
  </div>
</div>

<footer>
  <div>
    <Link to="/" className="nav-logo" style={{marginBottom: "12px", textDecoration: 'none'}}><span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span></Link>
    <p className="footer-tagline">Where ventures<br />take root.</p>
  </div>
  <div>
    <div className="footer-col-label">AI Frameworks</div>
    <ul className="footer-links">
      <li><Link to="/art-of-brand">Art of Brand</Link></li>
      <li><Link to="/campfyer">Campfyer</Link></li>
      <li><a href="https://paystack.com/pay/full-bundle-250" target="_blank">Full Dojo System</a></li>
    </ul>
  </div>
  <div>
    <div className="footer-col-label">Apply Now</div>
    <ul className="footer-links">
      <li><Link to="/apply">Foundation</Link></li>
      <li><Link to="/apply">Venture Build</Link></li>
      <li><Link to="/apply">Develop</Link></li>
      <li><Link to="/apply">Studio Partnership</Link></li>
      <li><Link to="/apply">hello@lotusroom.studio</Link></li>
    </ul>
  </div>
  <div className="footer-cta">
    <div className="footer-cta-text">Start a<br /><em>conversation.</em></div>
    <Link to="/apply" className="btn-nav">Say hello →</Link>
  </div>
  <div className="footer-copy">
    <span className="footer-copy-text">© 2026 Lotus Room Studio · Nairobi · @lotusroom.studio</span>
    <span className="footer-copy-text">Brand Strategy · AI Venture AI Frameworks</span>
  </div>
</footer>

    </div>
  );
}
