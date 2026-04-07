import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-about">
      <style>{`
        .page-about {
          min-height: 100vh;
        }
        ${ `
    :root {
      --cream: #F0EBE1; --cream-deep: #E8E0D4; --parchment: #F7F4EF;
      --ink: #1A1714; --ink-soft: #2A2218;
      --gold: #B8860B; --gold-light: #D4A84B; --gold-pale: #E8C97A;
      --gold-dim: rgba(184,134,11,0.18); --gold-thin: rgba(184,134,11,0.10);
      --warm-grey: #8B7355; --warm-grey2: #5A4A35;
      --fd: 'Cormorant Garamond', Georgia, serif;
      --fb: 'DM Sans', system-ui, sans-serif;
      --fm: 'DM Mono', monospace;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: var(--cream); color: var(--ink); font-family: var(--fb); font-weight: 300; -webkit-font-smoothing: antialiased; }
    body::before {
      content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9998;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.3; mix-blend-mode: multiply;
    }

    /* NAV */
    nav {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 48px;
      background: rgba(240,235,225,0.94); backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(90,74,53,0.10);
    }
    .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
    .nav-mark {
      width: 32px; height: 32px; border: 1px solid var(--gold);
      display: flex; align-items: center; justify-content: center;
    }
    .nav-wordmark { font-family: var(--fd); font-size: 16px; font-weight: 300; color: var(--ink); letter-spacing: .06em; }
    .nav-links { display: flex; align-items: center; gap: 28px; list-style: none; }
    .nav-links a { font-size: 11px; font-weight: 400; color: var(--warm-grey); text-decoration: none; letter-spacing: .08em; text-transform: uppercase; transition: color .15s; }
    .nav-links a:hover { color: var(--ink); }
    .nav-cta { display: flex; align-items: center; gap: 14px; }
    .btn-nav {
      padding: 8px 22px; background: transparent; border: 1px solid var(--gold);
      color: var(--gold); font-family: var(--fb); font-size: 10px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase; text-decoration: none; transition: all .2s;
    }
    .btn-nav:hover { background: var(--gold); color: var(--cream); }

    /* HERO */
    .hero {
      position: relative; min-height: 50vh;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 120px 48px 80px; overflow: hidden;
    }
    .hero-content { position: relative; z-index: 2; max-width: 860px; }
    h1 { font-family: var(--fd); font-size: clamp(52px,7.5vw,96px); font-weight: 300; line-height: .93; letter-spacing: -.02em; color: var(--ink); margin-bottom: 24px; }
    .hero-sub { font-size: 18px; font-weight: 300; line-height: 1.65; color: var(--warm-grey); max-width: 560px; margin-bottom: 40px; }

    /* SECTIONS */
    section { position: relative; z-index: 1; padding: 96px 48px; border-bottom: 1px solid rgba(90,74,53,0.08); }
    .inner { max-width: 1100px; margin: 0 auto; }
    .s-kicker { font-family: var(--fm); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; color: var(--warm-grey); margin-bottom: 16px; }
    h2 { font-family: var(--fd); font-size: clamp(36px,5vw,56px); font-weight: 300; line-height: 1.0; letter-spacing: -.02em; color: var(--ink); margin-bottom: 16px; }
    .s-intro { font-size: 16px; font-weight: 300; line-height: 1.70; color: var(--warm-grey); max-width: 560px; margin-bottom: 56px; }
    
    .pillars { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 48px; }
    .pillar { padding: 32px; background: var(--cream-deep); border-left: 2px solid var(--gold); }
    .pillar-title { font-family: var(--fd); font-size: 24px; font-weight: 500; color: var(--ink); margin-bottom: 12px; }
    .pillar-desc { font-size: 15px; font-weight: 300; color: var(--warm-grey2); line-height: 1.6; }

    /* VALUE LADDER */
    .ladder { display: flex; flex-direction: column; gap: 1px; background: rgba(90,74,53,0.10); border: 1px solid rgba(90,74,53,0.10); margin-top: 48px; }
    .rung { display: grid; grid-template-columns: 160px 1fr; align-items: center; background: var(--cream); text-decoration: none; color: inherit; transition: background .15s; }
    .rung:hover { background: var(--parchment); }
    .rung-price { padding: 24px 28px; border-right: 1px solid rgba(90,74,53,0.08); font-family: var(--fd); font-size: 24px; font-weight: 300; letter-spacing: -.02em; color: var(--gold); }
    .rung-body { padding: 24px 32px; }
    .rung-name { font-size: 14px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
    .rung-desc { font-size: 12px; font-weight: 300; color: var(--warm-grey); line-height: 1.45; }

    /* FOOTER */
    footer { position: relative; z-index: 1; padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 48px; align-items: start; border-top: 1px solid rgba(90,74,53,0.10); }
    .footer-tagline { font-family: var(--fd); font-size: 16px; font-weight: 300; font-style: italic; color: var(--warm-grey); line-height: 1.5; margin-top: 10px; }
    .footer-col-label { font-family: var(--fm); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: rgba(139,115,85,0.55); margin-bottom: 14px; }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
    .footer-links a { font-size: 13px; font-weight: 300; color: var(--warm-grey); text-decoration: none; transition: color .15s; }
    .footer-links a:hover { color: var(--ink); }
    .footer-cta { text-align: right; }
    .footer-cta-text { font-family: var(--fd); font-size: 22px; font-weight: 300; color: var(--warm-grey); margin-bottom: 14px; line-height: 1.2; }
    .footer-cta-text em { color: var(--gold); font-style: italic; }
    .footer-copy { grid-column: 1/-1; padding-top: 28px; border-top: 1px solid rgba(90,74,53,0.07); display: flex; justify-content: space-between; align-items: center; }
    .footer-copy-text { font-family: var(--fm); font-size: 10px; color: var(--warm-grey); letter-spacing: .06em; }

    @media(max-width:1024px){
      nav { padding: 12px 20px; flex-direction: column; align-items: flex-start; }
      .mobile-menu-btn { display: block !important; }
      .nav-links { display: none !important; width: 100%; flex-direction: column; gap: 16px; margin-top: 16px; }
      .nav-links.open { display: flex !important; }
      .hero{padding:120px 20px 64px;}
      section{padding:64px 20px;}
      footer{padding:40px 20px;}
      .rung{grid-template-columns:1fr; display: flex; flex-direction: column; align-items: flex-start;}
      .rung-price { border-right: none; border-bottom: 1px solid rgba(90,74,53,0.08); width: 100%; }
    }
    @media(max-width:900px){
      /* Removed .nav-links{display:none;} */
      footer{grid-template-columns:1fr 1fr;}
      .footer-cta{text-align:left;}
    }
  `.replace(/body/g, `.page-about`) }
      `}</style>
      
<nav>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', border: '1px solid rgba(139,115,85,0.25)', padding: '4px 8px', color: 'var(--warm-grey)', textDecoration: 'none', marginRight: '16px', letterSpacing: '0.05em' }}>[ ← Back ]</Link>
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
      </Link>
    </div>
    <button 
      className="mobile-menu-btn" 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
      style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer', display: 'none' }}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
  <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
    <li><Link to="/" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Home</Link></li>
    <li><Link to="/rooms" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Rooms</Link></li>
    <li><Link to="/dojo" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Dojo</Link></li>
    <li><Link to="/contact" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Contact</Link></li>
  </ul>
</nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Lotus Room</h1>
        </div>
      </header>

      <section>
        <div className="inner">
          <p className="s-intro" style={{maxWidth: '800px', fontSize: '20px'}}>
            Lotus Room is a strategy studio based in Nairobi. We build emerging startups as living systems, combining cultural architecture with proprietary AI. Ventures are designed for depth, memory, and scale.
          </p>
          
          <div className="pillars">
            <h2 style={{width: '100%', marginBottom: '32px'}}>Our Pillars</h2>
            <div className="pillar">
              <div className="pillar-title">✦ Brand Realism</div>
              <div className="pillar-desc">Narratives and visual systems that feel like film, not marketing.</div>
            </div>
            <div className="pillar">
              <div className="pillar-title">✦ Structural Intelligence</div>
              <div className="pillar-desc">Proprietary AI frameworks and apps that automate the heavy lifting of growth.</div>
            </div>
            <div className="pillar">
              <div className="pillar-title">✦ Cultural Architecture</div>
              <div className="pillar-desc">Building ventures and tools that shape culture, not just fill a market gap.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: "var(--parchment)"}}>
        <div className="inner">
          <h2>Operating Systems<br /><em>for Founders</em></h2>
          
          <div className="ladder">
            <div className="rung">
              <div className="rung-price" style={{fontSize: '14px', color: 'var(--warm-grey)'}}>Active</div>
              <div className="rung-body"><div className="rung-name">Dojo OS</div><div className="rung-desc">A structured environment where founders turn ideas into ventures. Brand, systems, and growth are built together so ideas become companies.</div></div>
            </div>
            <div className="rung">
              <div className="rung-price" style={{fontSize: '14px', color: 'var(--warm-grey)'}}>Coming Soon</div>
              <div className="rung-body"><div className="rung-name">Protocol OS</div><div className="rung-desc">The Corporate Shield. An institutional framework for the modern entity, protecting the founder and the firm through automated compliance and structural defensibility.</div></div>
            </div>
            <div className="rung">
              <div className="rung-price" style={{fontSize: '14px', color: 'var(--warm-grey)'}}>Coming Soon</div>
              <div className="rung-body"><div className="rung-name">Phoenix OS</div><div className="rung-desc">The Wealth Engine. A personal financial operating system for founders based on the Personal Chama model. Moving from high income to generational legacy through group-funded asset identification.</div></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <Link to="/" className="nav-logo" style={{marginBottom: "12px", textDecoration: 'none'}}>
            <span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
          </Link>
          <p className="footer-tagline">Where ventures<br />take root.</p>
        </div>
        <div>
          <div className="footer-col-label">AI Frameworks</div>
          <ul className="footer-links">
            <li><Link to="/art-of-brand">Art of Brand</Link></li>
            <li><Link to="/campfyer">Campfyer</Link></li>
            <li><a href="https://paystack.com/pay/full-bundle-250" target="_blank">Full Dojo System</a></li>
            <li><Link to="/rooms">All rooms</Link></li>
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
          <div className="footer-cta-text">Enter the<br /><em>Dojo.</em></div>
          <Link to="/dojo" className="btn-nav">Enter Dojo →</Link>
        </div>
        <div className="footer-copy">
          <span className="footer-copy-text">© 2026 Lotus Room Studio · Nairobi · @lotusroom.studio</span>
          <span className="footer-copy-text">Culture by Design</span>
        </div>
      </footer>
    </div>
  );
}
