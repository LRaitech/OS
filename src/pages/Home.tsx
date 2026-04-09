
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-home">
      <style>{`
        .page-home {
          min-height: 100vh;
        }
        ${ `
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: var(--cream); color: var(--ink); font-family: var(--fb); font-weight: 300; -webkit-font-smoothing: antialiased; }
    body::before {
      content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9998;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.3; mix-blend-mode: multiply;
    }

    /* NAV */

    /* HERO */
    .hero {
      position: relative; min-height: 95vh;
      display: flex; flex-direction: row; align-items: center; justify-content: space-between;
      padding: 0 48px; overflow: hidden; gap: 48px;
    }
    .hero-art {
      position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0;
    }
    .hero-scrim {
      position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(to top, rgba(var(--rgb-cream),0.98) 0%, rgba(var(--rgb-cream),0.72) 45%, rgba(var(--rgb-cream),0.18) 80%, transparent 100%);
    }
    .hero-content { position: relative; z-index: 2; max-width: 600px; flex: 1; }
    .hero-image { position: relative; z-index: 2; flex: 1; display: flex; justify-content: flex-end; align-items: center; }
    .hero-image img { max-width: 100%; max-height: 70vh; object-fit: contain; }
    .eyebrow {
      font-family: var(--fm); font-size: 9px; font-weight: 400;
      letter-spacing: .18em; text-transform: uppercase; color: var(--gold);
      border: 1px solid rgba(var(--rgb-gold),0.28); padding: 5px 12px;
      display: inline-block; margin-bottom: 28px;
    }
    h1 { font-family: var(--fd); font-size: clamp(52px,7.5vw,96px); font-weight: 300; line-height: .93; letter-spacing: -.02em; color: var(--ink); margin-bottom: 24px; }
    h1 em { font-style: italic; color: var(--gold); }
    .hero-sub { font-size: 18px; font-weight: 300; line-height: 1.65; color: var(--warm-grey); max-width: 560px; margin-bottom: 40px; }
    .hero-actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
    .btn-primary {
      padding: 16px 40px; background: transparent; border: 1px solid var(--gold);
      color: var(--gold); font-family: var(--fb); font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase; text-decoration: none; transition: all .2s; display: inline-block;
    }
    .btn-primary:hover { background: var(--gold); color: var(--cream); }
    .btn-ghost {
      font-size: 13px; font-weight: 300; color: var(--warm-grey); text-decoration: none;
      border-bottom: 1px solid rgba(var(--rgb-warm-grey),0.30); padding-bottom: 2px; transition: all .15s;
    }
    .btn-ghost:hover { color: var(--ink); border-color: var(--ink); }
    .hero-build-card {
      background: var(--parchment); border: 1px solid rgba(var(--rgb-gold), 0.2); padding: 24px; max-width: 400px; text-align: left;
    }

    /* PROOF */
    .proof-bar {
      display: grid; grid-template-columns: repeat(4,1fr);
      border-top: 1px solid rgba(var(--rgb-warm-grey2),0.10);
      border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.10);
      position: relative; z-index: 1;
    }
    .proof-item { padding: 32px 40px; border-right: 1px solid rgba(var(--rgb-warm-grey2),0.08); }
    .proof-item:last-child { border-right: none; }
    .proof-num { font-family: var(--fd); font-size: 44px; font-weight: 300; color: var(--gold); line-height: 1; letter-spacing: -.03em; margin-bottom: 4px; }
    .proof-label { font-size: 12px; font-weight: 300; color: var(--warm-grey); line-height: 1.45; }

    /* SECTIONS */
    section { position: relative; z-index: 1; padding: 96px 48px; border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.08); }
    .inner { max-width: 1100px; margin: 0 auto; }
    .s-kicker { font-family: var(--fm); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; color: var(--warm-grey); margin-bottom: 16px; }
    h2 { font-family: var(--fd); font-size: clamp(36px,5vw,56px); font-weight: 300; line-height: 1.0; letter-spacing: -.02em; color: var(--ink); margin-bottom: 16px; }
    h2 em { font-style: italic; color: var(--gold); }
    .s-intro { font-size: 16px; font-weight: 300; line-height: 1.70; color: var(--warm-grey); max-width: 560px; margin-bottom: 56px; }
    .rule { width: 40px; height: 1px; background: var(--gold); opacity: 0.5; margin: 18px 0; }

    /* TRACKS */
    .tracks { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(var(--rgb-warm-grey2),0.10); border: 1px solid rgba(var(--rgb-warm-grey2),0.10); margin-top: 48px; }
    .track { padding: 48px 40px; background: var(--cream); position: relative; overflow: hidden; }
    .track::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; }
    .track.AI Frameworks::before { background: linear-gradient(90deg, var(--gold), transparent); }
    .track.strategy::before { background: linear-gradient(90deg, var(--warm-grey2), transparent); }
    .track-label { font-family: var(--fm); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 20px; }
    .track.AI Frameworks .track-label { color: var(--gold); }
    .track.strategy .track-label { color: var(--warm-grey); }
    .track-price { font-family: var(--fd); font-size: 48px; font-weight: 300; letter-spacing: -.03em; line-height: 1; margin-bottom: 8px; }
    .track.AI Frameworks .track-price { color: var(--gold); }
    .track.strategy .track-price { color: var(--ink); }
    .track-range { font-family: var(--fm); font-size: 10px; font-weight: 300; color: var(--warm-grey); letter-spacing: .06em; margin-bottom: 24px; }
    h3 { font-family: var(--fd); font-size: 26px; font-weight: 300; color: var(--ink); line-height: 1.15; margin-bottom: 10px; }
    h3 em { font-style: italic; color: var(--gold); }
    .track-body { font-size: 14px; font-weight: 300; line-height: 1.70; color: var(--warm-grey); margin-bottom: 28px; }
    .track-list { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 32px; }
    .track-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; font-weight: 300; color: var(--warm-grey2); line-height: 1.4; }
    .track-list li::before { content: '·'; font-family: var(--fm); font-size: 10px; color: var(--warm-grey); flex-shrink: 0; padding-top: 1px; }
    .track-cta {
      display: inline-block; padding: 12px 24px; font-size: 10px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase; text-decoration: none; transition: all .15s;
    }
    .track.AI Frameworks .track-cta { background: var(--gold-thin); border: 1px solid rgba(var(--rgb-gold),0.40); color: var(--gold); }
    .track.AI Frameworks .track-cta:hover { background: var(--gold); color: var(--cream); }
    .track.strategy .track-cta { background: transparent; border: 1px solid rgba(var(--rgb-warm-grey2),0.30); color: var(--warm-grey2); }
    .track.strategy .track-cta:hover { border-color: var(--ink); color: var(--ink); }

    /* ROOMS GRID */
    .rooms-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 1px; background: rgba(var(--rgb-warm-grey2),0.10); border: 1px solid rgba(var(--rgb-warm-grey2),0.10); margin-top: 48px; }
    .room-card { padding: 32px 24px; background: var(--cream); position: relative; overflow: hidden; transition: background .2s; text-decoration: none; color: inherit; display: block; }
    .room-card:hover { background: var(--parchment); }
    .room-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--gold), transparent); opacity: 0; transition: opacity .2s; }
    .room-card:hover::before { opacity: 1; }
    .room-num { font-family: var(--fm); font-size: 9px; letter-spacing: .14em; color: var(--warm-grey); margin-bottom: 16px; }
    .room-name { font-family: var(--fd); font-size: 22px; font-weight: 300; color: var(--ink); line-height: 1.1; margin-bottom: 8px; }
    .room-desc { font-size: 12px; font-weight: 300; color: var(--warm-grey); line-height: 1.55; margin-bottom: 20px; }
    .room-price { font-family: var(--fm); font-size: 11px; font-weight: 300; color: var(--gold); letter-spacing: .06em; }
    .room-card.coming .room-name { color: var(--warm-grey); }
    .room-card.coming .room-price { color: rgba(var(--rgb-warm-grey),0.45); }

    /* VALUE LADDER */
    .ladder { display: flex; flex-direction: column; gap: 1px; background: rgba(var(--rgb-warm-grey2),0.10); border: 1px solid rgba(var(--rgb-warm-grey2),0.10); margin-top: 48px; }
    .rung { display: grid; grid-template-columns: 160px 1fr 180px; align-items: center; background: var(--cream); text-decoration: none; color: inherit; transition: background .15s; }
    .rung:hover { background: var(--parchment); }
    .rung-price { padding: 24px 28px; border-right: 1px solid rgba(var(--rgb-warm-grey2),0.08); font-family: var(--fd); font-size: 28px; font-weight: 300; letter-spacing: -.02em; }
    .rung.tools-r .rung-price { color: var(--gold); }
    .rung.service-r .rung-price { color: var(--warm-grey2); }
    .rung.strategy-r .rung-price { color: var(--ink); }
    .rung-body { padding: 24px 32px; border-right: 1px solid rgba(var(--rgb-warm-grey2),0.08); }
    .rung-name { font-size: 14px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
    .rung-desc { font-size: 12px; font-weight: 300; color: var(--warm-grey); line-height: 1.45; }
    .rung-track { padding: 24px 28px; font-family: var(--fm); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; text-align: right; }
    .rung.tools-r .rung-track { color: var(--gold); }
    .rung.service-r .rung-track { color: var(--warm-grey); }
    .rung.strategy-r .rung-track { color: var(--warm-grey2); }

    /* SPRINT */
    .sprint-section { background: var(--parchment); }
    .sprint-grid { display: grid; grid-template-columns: 1fr 360px; gap: 80px; align-items: center; }
    .sprint-price-block { padding: 40px; border: 1px solid rgba(var(--rgb-gold),0.25); background: var(--cream); text-align: center; }
    .sprint-amount { font-family: var(--fd); font-size: 72px; font-weight: 300; color: var(--gold); letter-spacing: -.04em; line-height: 1; margin-bottom: 6px; }
    .sprint-note { font-family: var(--fm); font-size: 10px; color: var(--warm-grey); letter-spacing: .08em; margin-bottom: 24px; }
    .sprint-what { list-style: none; display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 28px; }
    .sprint-what li { font-size: 13px; font-weight: 300; color: var(--warm-grey2); display: flex; align-items: center; gap: 8px; }
    .sprint-what li::before { content: ''; width: 3px; height: 3px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
    .sprint-btn {
      display: block; padding: 14px 24px; background: transparent; border: 1px solid var(--gold);
      color: var(--gold); font-family: var(--fb); font-size: 10px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase; text-decoration: none; text-align: center; transition: all .15s;
    }
    .sprint-btn:hover { background: var(--gold); color: var(--cream); }

    /* FOOTER */
    footer { position: relative; z-index: 1; padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 48px; align-items: start; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.10); }
    .footer-tagline { font-family: var(--fd); font-size: 16px; font-weight: 300; font-style: italic; color: var(--warm-grey); line-height: 1.5; margin-top: 10px; }
    .footer-col-label { font-family: var(--fm); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: rgba(var(--rgb-warm-grey),0.55); margin-bottom: 14px; }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
    .footer-links a { font-size: 13px; font-weight: 300; color: var(--warm-grey); text-decoration: none; transition: color .15s; }
    .footer-links a:hover { color: var(--ink); }
    .footer-cta { text-align: right; }
    .footer-cta-text { font-family: var(--fd); font-size: 22px; font-weight: 300; color: var(--warm-grey); margin-bottom: 14px; line-height: 1.2; }
    .footer-cta-text em { color: var(--gold); font-style: italic; }
    .footer-copy { grid-column: 1/-1; padding-top: 28px; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.07); display: flex; justify-content: space-between; align-items: center; }
    .footer-copy-text { font-family: var(--fm); font-size: 10px; color: var(--warm-grey); letter-spacing: .06em; }

    @media(max-width:1024px){
      .hero{padding:100px 20px 64px; flex-direction: column; justify-content: center; text-align: center;}
      .hero-content { display: flex; flex-direction: column; align-items: center; }
      .hero-sub { margin-left: auto; margin-right: auto; }
      .hero-image { justify-content: center; margin-top: 48px; }
      .hero-build-card { margin: 0 auto; text-align: center; }
      section{padding:64px 20px;}
      .s-intro { margin-left: auto; margin-right: auto; text-align: center; }
      .s-kicker { text-align: center; }
      h2 { text-align: center; }
      .rule { margin-left: auto; margin-right: auto; }
      footer{padding:40px 20px;}
      .tracks,.rooms-grid{grid-template-columns:1fr;}
      .proof-bar{grid-template-columns:1fr 1fr;}
      .sprint-grid{grid-template-columns:1fr;gap:40px; text-align: center;}
      .sprint-grid .rule { margin: 18px auto; }
      .sprint-grid p { margin-left: auto; margin-right: auto; }
      .rung{grid-template-columns:1fr; display: flex; flex-direction: column; align-items: center; text-align: center;}
      .rung-price { border-right: none; border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.08); width: 100%; text-align: center; }
      .rung-track{display:none;}
    }
    @media(max-width:900px){
      footer{grid-template-columns:1fr 1fr;}
      .footer-cta{text-align:left;}
    }
  `.replace(/body/g, `.page-home`) }
      `}</style>
      




<header className="hero">
  <svg className="hero-art" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="g1" cx="75%" cy="20%" r="60%"><stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.18"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      <radialGradient id="g2" cx="12%" cy="80%" r="55%"><stop offset="0%" stopColor="var(--warm-grey)" stopOpacity="0.12"/><stop offset="100%" stopColor="transparent"/></radialGradient>
    </defs>
    <rect width="1440" height="900" fill="var(--cream)"/>
    <rect width="1440" height="900" fill="url(#g1)"/>
    <rect width="1440" height="900" fill="url(#g2)"/>
    
    <g opacity="0.05" stroke="var(--warm-grey2)" fill="none" transform="translate(1100,200)">
      <circle cx="0" cy="0" r="120"/><circle cx="0" cy="0" r="180"/><circle cx="0" cy="0" r="240"/>
      <line x1="-240" y1="0" x2="240" y2="0"/><line x1="0" y1="-240" x2="0" y2="240"/>
      <line x1="-170" y1="-170" x2="170" y2="170"/><line x1="170" y1="-170" x2="-170" y2="170"/>
    </g>
    
    <g opacity="0.04" stroke="var(--warm-grey2)" fill="none" transform="translate(180,650)">
      <circle cx="0" cy="0" r="100"/><circle cx="0" cy="0" r="155"/><circle cx="0" cy="0" r="200"/>
    </g>
    
    <g opacity="0.09" stroke="var(--ink)" fill="var(--ink)">
      <line x1="80" y1="180" x2="160" y2="130" strokeWidth="0.5"/>
      <line x1="160" y1="130" x2="210" y2="180" strokeWidth="0.5"/>
      <line x1="210" y1="180" x2="280" y2="145" strokeWidth="0.5"/>
      <circle cx="80" cy="180" r="2.5"/><circle cx="160" cy="130" r="2"/><circle cx="210" cy="180" r="3"/>
      <circle cx="280" cy="145" r="1.5"/>
    </g>
    
    <g opacity="0.07" stroke="var(--ink)" fill="var(--ink)">
      <line x1="1200" y1="400" x2="1300" y2="360" strokeWidth="0.5"/>
      <line x1="1300" y1="360" x2="1360" y2="420" strokeWidth="0.5"/>
      <circle cx="1200" cy="400" r="2"/><circle cx="1300" cy="360" r="2.5"/><circle cx="1360" cy="420" r="1.5"/>
    </g>
    
    <g opacity="0.10" fill="none" stroke="var(--warm-grey)" transform="translate(950,380)">
      <circle cx="0" cy="0" r="90" strokeWidth="0.8"/>
      <circle cx="0" cy="0" r="62" strokeWidth="0.6"/>
      <circle cx="0" cy="0" r="36" strokeWidth="0.5"/>
      <ellipse cx="0" cy="0" rx="120" ry="45" strokeWidth="0.5" transform="rotate(-30)"/>
      <ellipse cx="0" cy="0" rx="100" ry="30" strokeWidth="0.4" transform="rotate(50)"/>
      <line x1="-62" y1="0" x2="62" y2="0" strokeWidth="0.5"/>
      <line x1="0" y1="-62" x2="0" y2="62" strokeWidth="0.5"/>
    </g>
    
    <g opacity="0.025" stroke="var(--ink)" strokeWidth="0.4">
      <line x1="0" y1="300" x2="1440" y2="300"/><line x1="0" y1="600" x2="1440" y2="600"/>
      <line x1="480" y1="0" x2="480" y2="900"/><line x1="960" y1="0" x2="960" y2="900"/>
    </g>
    
    <path d="M0,750 C300,720 600,780 900,750 C1100,728 1300,760 1440,745 L1440,900 L0,900Z" fill="var(--gold-light)" opacity="0.06"/>
  </svg>
  <div className="hero-scrim"></div>
  <FadeIn className="hero-content">
    <div className="eyebrow">Strategy Studio</div>
    <h1>Story. Strategy. <em>Systems.</em></h1>
    <p className="hero-sub" style={{ fontSize: '16px', maxWidth: '600px', lineHeight: '1.6', marginBottom: '32px' }}>
      We build systems for creator-led brands where design, AI, and strategy stay in sync, from ideas to venture-ready.
    </p>
    
  </FadeIn>

</header>


<div className="proof-bar">
  <FadeIn delay={0.1} className="proof-item"><div className="proof-num">5</div><div className="proof-label">Rooms in the Dojo System</div></FadeIn>
  <FadeIn delay={0.2} className="proof-item"><div className="proof-num">$15</div><div className="proof-label">Entry point. No gatekeeping.</div></FadeIn>
  <FadeIn delay={0.3} className="proof-item"><div className="proof-num">2</div><div className="proof-label">Tracks: AI Frameworks and Strategy</div></FadeIn>
  <FadeIn delay={0.4} className="proof-item"><div className="proof-num">∞</div><div className="proof-label">Run the workflows every month</div></FadeIn>
</div>


<section id="tracks">
  <FadeIn className="inner">
    <div className="s-kicker">// Two ways in</div>
    <h2>Pick your<br /><em>entry point.</em></h2>
    <p className="s-intro">One track for founders who want to build themselves. One for those ready to build with us.</p>
    <div className="tracks">
      <div className="track AI Frameworks">
        <div className="track-label">AI Frameworks track · self-serve</div>
        <h3>Build your brand,<br />content, and growth<br /><em>yourself.</em></h3>
        <p className="track-body">Run structured AI frameworks in a single session. Buy one room or access the full system. Every output is yours. No subscription, no agency, no waiting.</p>
        <ul className="track-list">
          <li>Art of Brand: complete brand identity system</li>
          <li>Campfyer: full 30-day campaign in one session</li>
          <li>EVO, Beat Therapy, Deeper: coming soon</li>
          <li>Full system access available</li>
        </ul>
        <Link to="/rooms" className="track-cta">[ See all rooms → ]</Link>
      </div>
      <div className="track strategy">
        <div className="track-label">Strategy track · high-touch</div>
        <h3>Build with a strategist<br />who understands your<br /><em>full system.</em></h3>
        <p className="track-body">We apply the Dojo methodology directly to your venture. Every stage is executed with you, in real time.</p>
        <ul className="track-list">
          <li>Foundation: clarity before scale</li>
          <li>Build: turn the idea into presence</li>
          <li>Develop: refine and systematize operations</li>
          <li>Capital: position for growth and investment</li>
        </ul>
        <Link to="/apply" className="track-cta">[ Book a discovery call → ]</Link>
      </div>
    </div>
  </FadeIn>
</section>


<section id="rooms" style={{background: "var(--parchment)"}}>
  <FadeIn className="inner">
    <div className="s-kicker">// Five Rooms</div>
    <h2>Systems for <em>Founders.</em></h2>
    <p className="s-intro">Five rooms. Four levels. A methodology that takes any founder from brand clarity to ecosystem mastery.</p>
    <div className="rooms-grid">
      <Link to="/art-of-brand" className="room-card">
        <div className="room-num">Room 01</div>
        <div className="room-name">Art of Brand</div>
        <div className="room-desc">Full brand identity: palette, fonts, voice, positioning. One session with our AI Frameworks.</div>
      </Link>
      <Link to="/campfyer" className="room-card">
        <div className="room-num">Room 02</div>
        <div className="room-name">Campfyer</div>
        <div className="room-desc">Full campaign: carousels, captions, calendar, discovery strategy.</div>
      </Link>
      <Link to="/rooms#evo" className="room-card coming">
        <div className="room-num">Room 03</div>
        <div className="room-name">EVO</div>
        <div className="room-desc">Growth and revenue architecture: CAC, LTV, 12-week systems.</div>
      </Link>
      <Link to="/rooms#beat-therapy" className="room-card coming">
        <div className="room-num">Room 04</div>
        <div className="room-name">Beat Therapy</div>
        <div className="room-desc">Creative process and community systems for founders building in culture.</div>
      </Link>
      <Link to="/rooms#deeper" className="room-card coming">
        <div className="room-num">Room 05</div>
        <div className="room-name">Deeper</div>
        <div className="room-desc">Investor narrative, unit economics, defensibility and positioning.</div>
      </Link>
    </div>
  </FadeIn>
</section>





<section id="sprint" className="sprint-section">
  <FadeIn className="inner">
    <div className="sprint-grid" style={{ gridTemplateColumns: '1fr' }}>
      <div>
        <div className="s-kicker">// Book a discovery call</div>
        <h2>Start with<br /><em>conversation</em></h2>
        <div className="rule"></div>
        <p style={{fontSize: "14px", fontWeight: "300", color: "var(--warm-grey)", lineHeight: "1.7", marginBottom: "32px"}}>Define your idea, audience, and cultural position.</p>
        <Link to="/contact" className="btn-primary">Book a Call →</Link>
        <p style={{marginTop: "14px", fontSize: "12px", fontWeight: "300", color: "var(--warm-grey)", fontFamily: "var(--fm)", letterSpacing: ".06em"}}>30 minutes · no pitch</p>
      </div>
    </div>
  </FadeIn>
</section>


    </div>
  );
}
