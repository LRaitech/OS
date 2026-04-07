import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Dojo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-dojo">
      <style>{`
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
        .page-dojo { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
        /* NAV */
        nav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 48px;
          background: rgba(240,235,225,0.94); backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(90,74,53,0.10);
        }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-wordmark { font-family: var(--fd); font-size: 16px; font-weight: 300; color: var(--ink); letter-spacing: .06em; }
        .nav-links { display: flex; align-items: center; gap: 28px; list-style: none; }
        .nav-links a { font-size: 11px; font-weight: 400; color: var(--warm-grey); text-decoration: none; letter-spacing: .08em; text-transform: uppercase; transition: color .15s; }
        .nav-links a:hover { color: var(--ink); }

        /* HERO */
        .hero { position: relative; min-height: 50vh; display: flex; flex-direction: column; justify-content: center; padding: 120px 48px 80px; overflow: hidden; background: var(--ink); color: var(--cream); text-align: center; }
        .hero h1 { font-family: var(--fd); font-size: clamp(48px,8vw,80px); font-weight: 300; line-height: .93; letter-spacing: -.02em; color: var(--cream); margin-bottom: 24px; }
        .hero-sub { font-size: 18px; font-weight: 300; line-height: 1.65; color: rgba(242,237,230,0.7); max-width: 640px; margin: 0 auto 40px; }
        .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn-primary { padding: 16px 40px; background: var(--gold); border: 1px solid var(--gold); color: var(--cream); font-family: var(--fb); font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; transition: all .2s; display: inline-block; }
        .btn-primary:hover { background: var(--gold-light); border-color: var(--gold-light); }
        .btn-secondary { padding: 16px 40px; background: transparent; border: 1px solid rgba(240,235,225,0.3); color: var(--cream); font-family: var(--fb); font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; transition: all .2s; display: inline-block; }
        .btn-secondary:hover { border-color: var(--cream); }

        /* CONTENT */
        .dojo-section { padding: 80px 48px; max-width: 1000px; margin: 0 auto; text-align: center; }
        .dojo-section h2 { font-family: var(--fd); font-size: 40px; font-weight: 300; color: var(--ink); margin-bottom: 16px; line-height: 1.1; }
        .dojo-section > p { font-size: 16px; font-weight: 300; color: var(--warm-grey2); line-height: 1.7; max-width: 720px; margin: 0 auto 48px; }
        
        .stages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 64px; }
        .stage-card { padding: 40px 24px; background: var(--parchment); border: 1px solid rgba(90,74,53,0.1); text-align: center; }
        .stage-card h3 { font-family: var(--fd); font-size: 24px; font-weight: 300; color: var(--ink); }

        .cta-section { text-align: center; padding: 0 48px 120px; }

        @media(max-width:1024px){
          nav{padding:14px 20px; flex-direction: column; align-items: flex-start;}
          .mobile-menu-btn { display: block !important; }
          .nav-links { display: none; width: 100%; flex-direction: column; gap: 16px; margin-top: 16px; }
          .nav-links.open { display: flex; }
          .hero{padding:100px 20px 64px;}
          .dojo-section { padding: 60px 20px; }
          .stages-grid { grid-template-columns: 1fr; }
        }
        @media(max-width:900px){
          /* Removed .nav-links{display:none;} */
        }
      `}</style>

      {/* NAV */}
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
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/dojo">Dojo</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>The Dojo</h1>
          <p className="hero-sub">12-week immersive programme for founders ready to build. Work directly with our team to execute your venture in real time.</p>
          <p className="hero-sub" style={{fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--gold-light)'}}>Hybrid format · Online + Nairobi Studio · Maximum 8 founders per cohort</p>
          <div className="hero-ctas">
            <Link to="/apply" className="btn-primary">Apply to the Dojo →</Link>
            <a href="https://paystack.com/buy/the-dojo-lqrmjw" target="_blank" className="btn-secondary">Start now .</a>
          </div>
        </div>
      </header>

      {/* STAGES */}
      <section id="stages" className="dojo-section">
        
        <div className="stages-grid" style={{textAlign: "left", gap: "32px"}}>
          <div className="stage-card" style={{textAlign: "left", padding: "40px 32px"}}>
            <div style={{fontFamily: "var(--fm)", fontSize: "12px", color: "var(--gold)", marginBottom: "16px"}}>01</div>
            <h3 style={{marginBottom: "4px"}}>Foundation</h3>
            <div style={{fontFamily: "var(--fm)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--warm-grey)", marginBottom: "24px"}}>Clarity</div>
            <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px", color: "var(--warm-grey2)", lineHeight: "1.6"}}>
              <li style={{marginBottom: "8px"}}>Early-stage clarity</li>
              <li style={{marginBottom: "8px"}}>Narrative foundations</li>
              <li style={{marginBottom: "8px"}}>Brand structure</li>
            </ul>
            <p style={{fontSize: "13px", color: "var(--ink)", margin: 0, fontStyle: "italic"}}>Define idea, audience, cultural position</p>
          </div>
          
          <div className="stage-card" style={{textAlign: "left", padding: "40px 32px"}}>
            <div style={{fontFamily: "var(--fm)", fontSize: "12px", color: "var(--gold)", marginBottom: "16px"}}>02</div>
            <h3 style={{marginBottom: "4px"}}>Build</h3>
            <div style={{fontFamily: "var(--fm)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--warm-grey)", marginBottom: "24px"}}>Presence</div>
            <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px", color: "var(--warm-grey2)", lineHeight: "1.6"}}>
              <li style={{marginBottom: "8px"}}>Content creation</li>
              <li style={{marginBottom: "8px"}}>Campaign execution</li>
              <li style={{marginBottom: "8px"}}>Storytelling systems</li>
            </ul>
            <p style={{fontSize: "13px", color: "var(--ink)", margin: 0, fontStyle: "italic"}}>Turn vision into public presence</p>
          </div>
          
          <div className="stage-card" style={{textAlign: "left", padding: "40px 32px"}}>
            <div style={{fontFamily: "var(--fm)", fontSize: "12px", color: "var(--gold)", marginBottom: "16px"}}>03</div>
            <h3 style={{marginBottom: "4px"}}>Develop</h3>
            <div style={{fontFamily: "var(--fm)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--warm-grey)", marginBottom: "24px"}}>Structure</div>
            <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px", color: "var(--warm-grey2)", lineHeight: "1.6"}}>
              <li style={{marginBottom: "8px"}}>Scale operations</li>
              <li style={{marginBottom: "8px"}}>Align teams</li>
              <li style={{marginBottom: "8px"}}>Refine internal systems</li>
            </ul>
            <p style={{fontSize: "13px", color: "var(--ink)", margin: 0, fontStyle: "italic"}}>Workflows for growth</p>
          </div>
          
          <div className="stage-card" style={{textAlign: "left", padding: "40px 32px"}}>
            <div style={{fontFamily: "var(--fm)", fontSize: "12px", color: "var(--gold)", marginBottom: "16px"}}>04</div>
            <h3 style={{marginBottom: "4px"}}>Capital</h3>
            <div style={{fontFamily: "var(--fm)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--warm-grey)", marginBottom: "24px"}}>Expansion</div>
            <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px", color: "var(--warm-grey2)", lineHeight: "1.6"}}>
              <li style={{marginBottom: "8px"}}>Venture-ready strategies</li>
              <li style={{marginBottom: "8px"}}>Funding preparation</li>
              <li style={{marginBottom: "8px"}}>Growth acceleration</li>
            </ul>
            <p style={{fontSize: "13px", color: "var(--ink)", margin: 0, fontStyle: "italic"}}>Investor positioning</p>
          </div>
        </div>

        <div className="cta-section" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/apply" className="btn-primary" style={{ padding: '20px 60px', fontSize: '13px' }}>Apply to the Dojo →</Link>
          <a href="https://paystack.com/buy/the-dojo-lqrmjw" target="_blank" className="btn-secondary" style={{ padding: '20px 60px', fontSize: '13px' }}>Start now .</a>
        </div>
      </section>
    </div>
  );
}
