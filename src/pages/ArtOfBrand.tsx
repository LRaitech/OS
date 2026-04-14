
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function ArtOfBrand() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-artofbrand">
      <style>{`
        .page-artofbrand {
          min-height: 100vh;
        }
        ${ `
    

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      background: var(--cream);
      color: var(--ink);
      font-family: var(--fb);
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
    }

    body::before {
      content: '';
      position: fixed; inset: 0;
      pointer-events: none; z-index: 9998;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.30;
      mix-blend-mode: multiply;
    }

    /* ── HERO ── */
    .hero {
      position: relative;
      min-height: 88vh;
      display: flex; flex-direction: column;
      justify-content: flex-end;
      padding: 0 40px 72px;
      overflow: hidden;
    }
    .hero-art {
      position: absolute; inset: 0;
      width: 100%; height: 100%; z-index: 0;
    }
    .hero-scrim {
      position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(
        to top,
        rgba(var(--rgb-cream),0.98) 0%,
        rgba(var(--rgb-cream),0.72) 42%,
        rgba(var(--rgb-cream),0.20) 78%,
        transparent 100%
      );
    }
    .hero-content { position: relative; z-index: 2; max-width: 760px; }
    .hero-eyebrow {
      display: flex; align-items: center; gap: 12px; margin-bottom: 26px;
    }
    .room-tag {
      font-family: var(--fm); font-size: 9px; letter-spacing: .18em;
      text-transform: uppercase; color: var(--gold);
      background: var(--gold-thin); border: 1px solid rgba(var(--rgb-gold-dark),0.28);
      padding: 5px 12px;
    }
    .room-sep { width: 24px; height: 1px; background: rgba(var(--rgb-gold-dark),0.30); }
    .room-num {
      font-family: var(--fm); font-size: 9px; letter-spacing: .18em;
      color: var(--warm-grey); text-transform: uppercase;
    }
    .hero-title {
      font-family: var(--fd);
      font-size: clamp(52px, 8vw, 90px);
      font-weight: 300; line-height: .92; letter-spacing: -.03em;
      color: var(--ink); margin-bottom: 24px;
    }
    .hero-title em { font-style: italic; color: var(--gold); }
    .hero-desc {
      font-size: 17px; font-weight: 300;
      line-height: 1.65; color: var(--warm-grey);
      max-width: 560px; margin-bottom: 36px;
    }
    .hero-actions { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .btn-primary {
      padding: 16px 40px;
      background: transparent; border: 1px solid var(--gold);
      color: var(--gold); font-family: var(--fb);
      font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase;
      cursor: pointer; text-decoration: none; transition: all .18s;
      display: inline-block;
    }
    .btn-primary:hover { background: var(--gold); color: var(--cream); }
    .hero-price-label {
      font-family: var(--fd); font-size: 22px; font-weight: 300;
      color: var(--warm-grey);
    }
    .hero-price-label strong { color: var(--gold); font-weight: 300; }
    .hero-scroll {
      position: absolute; bottom: 28px; right: 40px; z-index: 2;
      font-family: var(--fm); font-size: 9px; letter-spacing: .14em;
      text-transform: uppercase; color: rgba(var(--rgb-cream),0.40);
    }

    /* ── PROOF BAR ── */
    .proof-bar {
      position: relative; z-index: 1;
      display: grid; grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid rgba(var(--rgb-cream),0.08);
      border-bottom: 1px solid rgba(var(--rgb-cream),0.08);
    }
    .proof-item {
      padding: 28px 32px;
      border-right: 1px solid rgba(var(--rgb-cream),0.08);
    }
    .proof-item:last-child { border-right: none; }
    .proof-num {
      font-family: var(--fd); font-size: 40px; font-weight: 300;
      color: var(--gold); line-height: 1; letter-spacing: -.03em; margin-bottom: 4px;
    }
    .proof-label { font-size: 12px; font-weight: 300; color: var(--warm-grey); line-height: 1.4; }

    /* ── SECTIONS ── */
    .section {
      position: relative; z-index: 1;
      padding: 80px 40px;
      border-bottom: 1px solid rgba(var(--rgb-cream),0.07);
    }
    .section-inner { max-width: 920px; margin: 0 auto; }
    .s-label {
      font-family: var(--fm); font-size: 9px; letter-spacing: .18em;
      text-transform: uppercase; color: var(--warm-grey); margin-bottom: 16px;
    }
    .s-title {
      font-family: var(--fd); font-size: 48px; font-weight: 300;
      line-height: 1.0; letter-spacing: -.02em;
      color: var(--ink); margin-bottom: 14px;
    }
    .s-title em { font-style: italic; color: var(--gold); }
    .s-sub {
      font-size: 15px; font-weight: 300; color: var(--warm-grey);
      line-height: 1.65; max-width: 540px; margin-bottom: 48px;
    }
    .rule {
      width: 40px; height: 1px;
      background: var(--gold); opacity: 0.5; margin: 18px 0;
    }

    /* ── 3 TOOLS ── */
    .tools-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1px; background: rgba(var(--rgb-cream),0.10);
      border: 1px solid rgba(var(--rgb-cream),0.10);
    }
    .tool-card {
      padding: 32px 28px; background: var(--cream);
      position: relative; overflow: hidden;
      transition: background .18s;
    }
    .tool-card:hover { background: var(--parchment); }
    .tool-card::before {
      content: ''; position: absolute; top: 0; left: 0;
      width: 100%; height: 2px;
      background: linear-gradient(90deg, var(--gold), transparent);
      opacity: 0; transition: opacity .18s;
    }
    .tool-card:hover::before { opacity: 1; }
    .tool-num {
      font-family: var(--fd); font-size: 52px; font-weight: 300;
      color: rgba(var(--rgb-gold-dark),0.08); line-height: 1;
      position: absolute; top: 16px; right: 20px;
      pointer-events: none;
    }
    .tool-icon { font-size: 22px; margin-bottom: 16px; }
    .tool-name {
      font-family: var(--fd); font-size: 22px; font-weight: 400;
      color: var(--ink); margin-bottom: 8px; line-height: 1.15;
    }
    .tool-desc {
      font-size: 13px; font-weight: 300; color: var(--warm-grey);
      line-height: 1.6; margin-bottom: 18px;
    }
    .tool-delivers {
      display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 20px;
    }
    .tool-tag {
      font-family: var(--fm); font-size: 9.5px; font-weight: 300;
      color: var(--warm-grey); background: rgba(var(--rgb-cream),0.06);
      border: 1px solid rgba(var(--rgb-cream),0.10); padding: 3px 9px;
      letter-spacing: .04em;
    }
    .tool-price-row {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 16px; border-top: 1px solid rgba(var(--rgb-cream),0.08);
    }
    .tool-price {
      font-family: var(--fd); font-size: 32px; font-weight: 300;
      color: var(--gold); letter-spacing: -.02em;
    }
    .tool-buy {
      padding: 9px 18px; background: transparent;
      border: 1px solid rgba(var(--rgb-gold-dark),0.40); color: var(--gold);
      font-family: var(--fb); font-size: 10px; font-weight: 500;
      letter-spacing: .10em; text-transform: uppercase;
      text-decoration: none; transition: all .15s;
    }
    .tool-buy:hover { background: var(--gold); color: var(--cream); }

    /* ── WHAT YOU GET ── */
    .deliverable-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .d-card {
      padding: 28px; background: var(--parchment);
      border: 1px solid rgba(var(--rgb-cream),0.10);
      position: relative; overflow: hidden;
    }
    .d-card::before {
      content: ''; position: absolute; top: 0; left: 0;
      width: 100%; height: 2px;
      background: linear-gradient(90deg, var(--warm-grey), transparent);
    }
    .d-card.gold-tint { background: rgba(var(--rgb-gold-dark),0.03); border-color: rgba(var(--rgb-gold-dark),0.18); }
    .d-card.gold-tint::before { background: linear-gradient(90deg, var(--gold), transparent); }
    .d-n {
      font-family: var(--fd); font-size: 48px; font-weight: 300;
      color: rgba(var(--rgb-cream),0.06); line-height: 1;
      position: absolute; top: 12px; right: 16px;
    }
    .d-icon { font-size: 20px; margin-bottom: 14px; }
    .d-name {
      font-family: var(--fd); font-size: 20px; font-weight: 400;
      color: var(--ink); margin-bottom: 7px;
    }
    .d-desc {
      font-size: 13px; font-weight: 300; color: var(--warm-grey);
      line-height: 1.6; margin-bottom: 14px;
    }
    .d-details { display: flex; flex-wrap: wrap; gap: 5px; }
    .d-detail {
      font-family: var(--fm); font-size: 10px; font-weight: 300;
      color: var(--warm-grey); background: rgba(var(--rgb-cream),0.04);
      border: 1px solid rgba(var(--rgb-cream),0.09); padding: 3px 9px;
    }

    /* ── HOW IT WORKS ── */
    .how-steps { display: flex; flex-direction: column; gap: 0; margin-top: 16px; }
    .how-step {
      display: flex; gap: 20px; padding: 20px 0;
      border-bottom: 1px solid rgba(var(--rgb-cream),0.06);
    }
    .how-step:last-child { border-bottom: none; }
    .how-n {
      font-family: var(--fd); font-size: 40px; font-weight: 300;
      color: rgba(var(--rgb-gold-dark),0.30); flex-shrink: 0; width: 42px; line-height: 1;
    }
    .how-body {}
    .how-title {
      font-family: var(--fd); font-size: 20px; font-weight: 400;
      color: var(--ink); line-height: 1.2; margin-bottom: 4px;
    }
    .how-sub {
      font-size: 13px; font-weight: 300;
      color: var(--warm-grey); line-height: 1.6;
    }

    /* ── AI Framework PREVIEW ── */
    .prompt-preview {
      margin-top: 14px; padding: 18px 20px;
      background: rgba(var(--rgb-cream),0.04);
      border: 1px solid rgba(var(--rgb-cream),0.15);
      border-left: 2px solid var(--gold);
    }
    .pp-label {
      font-family: var(--fm); font-size: 9px; letter-spacing: .14em;
      text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
    }
    .pp-line {
      font-family: var(--fm); font-size: 12px; font-weight: 300;
      color: var(--warm-grey2); line-height: 1.8;
    }
    .pp-line span { color: var(--gold); }
    .pp-line.dim { color: rgba(var(--rgb-cream),0.45); }
    .cursor {
      display: inline-block; width: 7px; height: 13px;
      background: var(--gold); vertical-align: middle; opacity: 0.6;
      animation: blink 1.1s step-end infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }

    /* ── OUTPUT PROOF ── */
    .proof-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
      margin-top: 12px;
    }
    .proof-cell {
      padding: 16px; background: var(--cream);
      border: 1px solid rgba(var(--rgb-cream),0.10);
      display: flex; flex-direction: column; gap: 5px;
    }
    .proof-cell.span2 { grid-column: 1/-1; }
    .proof-cell.gold-tint { background: rgba(var(--rgb-gold-dark),0.04); border-color: rgba(var(--rgb-gold-dark),0.18); }
    .proof-lbl {
      font-size: 9px; font-weight: 500; letter-spacing: .12em;
      text-transform: uppercase; color: rgba(var(--rgb-cream),0.55);
    }
    .proof-val {
      font-family: var(--fd); font-size: 16px; font-weight: 400;
      color: var(--ink); line-height: 1.2;
    }
    .proof-val em { font-style: italic; color: var(--gold); }
    .proof-sub {
      font-size: 11px; font-weight: 300;
      color: var(--warm-grey); line-height: 1.35;
    }
    .swatch-row { display: flex; gap: 5px; margin-top: 5px; }
    .sw { height: 16px; border-radius: 1px; flex: 1; }

    /* ── PRICING ── */
    .pricing-section {
      position: relative; z-index: 1; padding: 80px 40px;
      background: var(--parchment);
      border-bottom: 1px solid rgba(var(--rgb-cream),0.07);
    }
    .pricing-inner { max-width: 920px; margin: 0 auto; }
    .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 48px; }
    .price-card {
      padding: 36px 32px; border: 1px solid rgba(var(--rgb-cream),0.12);
      background: var(--cream); display: flex; flex-direction: column;
    }
    .price-card.featured {
      border-color: rgba(var(--rgb-gold-dark),0.38);
      background: rgba(var(--rgb-gold-dark),0.03);
    }
    .price-tier {
      font-family: var(--fm); font-size: 9px; letter-spacing: .16em;
      text-transform: uppercase; color: var(--warm-grey); margin-bottom: 20px;
    }
    .price-card.featured .price-tier { color: var(--gold); }
    .price-amount {
      font-family: var(--fd); font-size: 64px; font-weight: 300;
      color: var(--ink); line-height: 1; letter-spacing: -.04em; margin-bottom: 6px;
    }
    .price-card.featured .price-amount { color: var(--gold); }
    .price-note {
      font-size: 12px; font-weight: 300; color: var(--warm-grey);
      margin-bottom: 28px; font-family: var(--fm);
    }
    .price-includes { display: flex; flex-direction: column; gap: 10px; flex: 1; margin-bottom: 28px; }
    .pi-row {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 13px; font-weight: 300; color: var(--warm-grey2); line-height: 1.4;
    }
    .pi-row::before { content: '·'; color: rgba(var(--rgb-cream),0.30); flex-shrink: 0; font-family: var(--fm); font-size: 11px; }
    .price-card.featured .pi-row { color: var(--warm-grey2); }
    .price-btn {
      display: block; padding: 14px 24px;
      border: 1px solid rgba(var(--rgb-cream),0.20); color: var(--warm-grey2);
      font-family: var(--fb); font-size: 10px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase;
      text-align: center; cursor: pointer; text-decoration: none;
      transition: all .15s; background: transparent;
    }
    .price-btn:hover { border-color: var(--ink); color: var(--ink); }
    .price-btn.gold-btn {
      background: var(--gold-thin); border-color: rgba(var(--rgb-gold-dark),0.50); color: var(--gold);
    }
    .price-btn.gold-btn:hover { background: var(--gold); color: var(--cream); }

    /* ── WHO IT'S FOR ── */
    .audience-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1px; background: rgba(var(--rgb-cream),0.10);
      border: 1px solid rgba(var(--rgb-cream),0.10); margin-top: 0;
    }
    .aud-card { padding: 28px 24px; background: var(--cream); }
    .aud-head {
      font-family: var(--fd); font-size: 19px; font-weight: 400;
      color: var(--ink); margin-bottom: 8px; line-height: 1.2;
    }
    .aud-desc { font-size: 13px; font-weight: 300; color: var(--warm-grey); line-height: 1.6; }

    /* ── STRATEGY CTA ── */
    .strategy-cta {
      padding: 72px 40px; background: var(--cream);
      border-top: 1px solid rgba(var(--rgb-cream),0.07);
      text-align: center;
    }
    .sc-inner { max-width: 600px; margin: 0 auto; }
    .sc-pre {
      font-family: var(--fm); font-size: 9px; letter-spacing: .18em;
      text-transform: uppercase; color: var(--warm-grey); margin-bottom: 16px;
    }
    .sc-title {
      font-family: var(--fd); font-size: 40px; font-weight: 300;
      color: var(--ink); line-height: 1.1; margin-bottom: 14px;
    }
    .sc-title em { font-style: italic; color: var(--gold); }
    .sc-body {
      font-size: 14px; font-weight: 300; color: var(--warm-grey);
      line-height: 1.7; margin-bottom: 28px;
    }

    /* ── FOOTER ── */
    footer {
      position: relative; z-index: 1; padding: 48px 40px;
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(var(--rgb-cream),0.08);
      background: var(--parchment);
    }
    .footer-left {
      font-family: var(--fd); font-size: 14px; font-weight: 300;
      color: var(--warm-grey);
    }
    .footer-right {
      font-family: var(--fm); font-size: 10px; letter-spacing: .10em;
      color: rgba(var(--rgb-cream),0.45);
    }

    .how-grid {
      display: grid; grid-template-columns: 1fr 420px; gap: 72px; align-items: start;
    }
    .room-setup-grid {
      margin-top: 16px; padding: 28px 32px; border: 1px solid rgba(var(--rgb-cream),0.12); background: var(--cream); display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center;
    }

    @media (max-width: 1024px) {
      .hero { padding: 0 20px 60px; }
      .section, .pricing-section { padding: 56px 20px; }
      .tools-grid { grid-template-columns: 1fr; }
      .deliverable-grid { grid-template-columns: 1fr; }
      .pricing-grid { grid-template-columns: 1fr; }
      .audience-grid { grid-template-columns: 1fr; }
      .proof-grid { grid-template-columns: 1fr; }
      .how-grid { grid-template-columns: 1fr; gap: 40px; }
      .room-setup-grid { grid-template-columns: 1fr; gap: 20px; text-align: center; padding: 24px 20px; }
      .room-setup-grid > div:last-child { text-align: center !important; }
      .strategy-cta { padding: 56px 20px; }
      .proof-bar { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 680px) {
      footer { flex-direction: column; gap: 12px; padding: 28px 20px; text-align: center; }
    }
  `.replace(/body/g, `.page-artofbrand`) }
      `}</style>
      





<section className="hero">
  <svg className="hero-art" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hg1" cx="72%" cy="18%" r="58%">
        <stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="hg2" cx="12%" cy="82%" r="52%">
        <stop offset="0%" stopColor="var(--warm-grey)" stopOpacity="0.10"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="1440" height="860" fill="var(--cream)"/>
    <rect width="1440" height="860" fill="url(#hg1)"/>
    <rect width="1440" height="860" fill="url(#hg2)"/>

    <g stroke="var(--gold-light)" fill="none" opacity="0.25">
      <path d="M 200 400 L 400 200 L 600 400 L 400 600 Z" strokeWidth="1"/>
      <path d="M 400 200 L 800 200 L 1000 400 L 800 600 L 400 600" strokeWidth="1"/>
      <circle cx="200" cy="400" r="4" fill="var(--gold-light)"/>
      <circle cx="400" cy="200" r="4" fill="var(--gold-light)"/>
      <circle cx="600" cy="400" r="4" fill="var(--gold-light)"/>
      <circle cx="400" cy="600" r="4" fill="var(--gold-light)"/>
      <circle cx="800" cy="200" r="4" fill="var(--gold-light)"/>
      <circle cx="1000" cy="400" r="4" fill="var(--gold-light)"/>
      <circle cx="800" cy="600" r="4" fill="var(--gold-light)"/>
      
      <path d="M 600 400 L 800 200" strokeWidth="0.5" strokeDasharray="4 4"/>
      <path d="M 600 400 L 800 600" strokeWidth="0.5" strokeDasharray="4 4"/>
      <path d="M 400 400 L 800 400" strokeWidth="0.5" strokeDasharray="4 4"/>
      <circle cx="400" cy="400" r="2" fill="var(--gold-light)"/>
      <circle cx="800" cy="400" r="2" fill="var(--gold-light)"/>
    </g>

    <g opacity="0.05" stroke="var(--cream)" strokeWidth="0.4">
      <line x1="0" y1="287" x2="1440" y2="287"/>
      <line x1="0" y1="574" x2="1440" y2="574"/>
      <line x1="480" y1="0" x2="480" y2="860"/>
      <line x1="960" y1="0" x2="960" y2="860"/>
    </g>
  </svg>
  <div className="hero-scrim"></div>
  <div className="hero-content">
    <div className="hero-eyebrow">
      <div className="room-tag">Art of Brand</div>
      <div className="room-sep"></div>
      <div className="room-num">Room 01 · Lotus Room</div>
    </div>
    <h1 className="hero-title" style={{color: "var(--ink)"}}>Brand Identity<br /><em>Frameworks.</em></h1>
    <p className="hero-desc" style={{color: "var(--ink-soft)"}}>AI-driven systems to build your complete brand identity. Minimal, structured, and ready to scale.</p>
    <div className="hero-actions">
      <a href="#pricing" className="btn-primary">Get instant access →</a>
      <div className="hero-price-label">From <strong>$20</strong></div>
    </div>
  </div>
  <div className="hero-scroll">Scroll to explore ↓</div>
</section>



<div className="proof-bar">
  <div className="proof-item">
    <div className="proof-num">3</div>
    <div className="proof-label">AI Frameworks, copy-paste ready</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">4</div>
    <div className="proof-label">Core brand deliverables</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">60<span style={{fontSize: "24px"}}>min</span></div>
    <div className="proof-label">From brief to complete brand identity</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">∞</div>
    <div className="proof-label">Apply it everywhere, forever</div>
  </div>
</div>


<section className="section">
  <div className="section-inner">
    <div className="s-label">// The AI Frameworks</div>
    <h2 className="s-title">Three frameworks.<br /><em>One system.</em></h2>
    <p className="s-sub">Buy individually or get the full bundle. Run them in sequence for a complete brand system, or grab the specific module you need right now.</p>

    <div className="tools-grid">
      
      <div className="tool-card">
        <div className="tool-num">01</div>
        <div className="tool-icon">◈</div>
        <div className="tool-name">Founder Story Engine</div>
        <div className="tool-desc">Extract your narrative foundation. Defines where you sit in the market and who you are at your core.</div>
        <div className="tool-delivers">
          <span className="tool-tag">Founder narrative</span>
          <span className="tool-tag">Strategic positioning</span>
          <span className="tool-tag">Brand archetype</span>
          <span className="tool-tag">One-line statement</span>
        </div>
        <div className="tool-price-row">
          <div className="tool-price">$19</div>
          <a href="https://paystack.com/buy/art-of-brand-founder-story-engine" target="_blank" className="tool-buy">Buy Framework 01 →</a>
        </div>
      </div>

      
      <div className="tool-card">
        <div className="tool-num">02</div>
        <div className="tool-icon">🎨</div>
        <div className="tool-name">Brand Core Builder</div>
        <div className="tool-desc">Derive your visual and verbal identity system. The assets that make your brand recognizable.</div>
        <div className="tool-delivers">
          <span className="tool-tag">6-color palette (Hex)</span>
          <span className="tool-tag">Typography pairing</span>
          <span className="tool-tag">Voice guide</span>
          <span className="tool-tag">3 Content pillars</span>
        </div>
        <div className="tool-price-row">
          <div className="tool-price">$19</div>
          <a href="https://paystack.com/buy/art-or-brand-brand-core-builder" target="_blank" className="tool-buy">Buy Framework 02 →</a>
        </div>
      </div>

      
      <div className="tool-card">
        <div className="tool-num">03</div>
        <div className="tool-icon">◎</div>
        <div className="tool-name">Website Structure Builder</div>
        <div className="tool-desc">Convert your identity into a conversion-ready site architecture and high-impact copy.</div>
        <div className="tool-delivers">
          <span className="tool-tag">Site architecture</span>
          <span className="tool-tag">Hero section copy</span>
          <span className="tool-tag">Page-by-page structure</span>
          <span className="tool-tag">CTA framework</span>
        </div>
        <div className="tool-price-row">
          <div className="tool-price">$25</div>
          <a href="https://paystack.com/buy/art-of-brand-website-structure-builder" target="_blank" className="tool-buy">Buy Framework 03 →</a>
        </div>
      </div>
    </div>

    <div className="strategy-cta" style={{marginTop: "80px", border: "1px solid rgba(var(--rgb-gold-dark),0.15)"}}>
      <div className="sc-inner">
        <div className="sc-pre">// The Full Bundle</div>
        <h2 className="sc-title">Brand <em>OS.</em></h2>
        <p className="sc-body">One system. All three frameworks combined to build your complete brand identity.</p>
        <a href="https://paystack.com/buy/art-of-brand-brand-os" target="_blank" className="btn-primary" style={{borderColor: "var(--gold)", color: "var(--gold)"}}>Buy Brand OS →</a>
      </div>
    </div>
  </div>
</section>


<section className="section" style={{background: "var(--parchment)"}}>
  <div className="section-inner">
    <div className="s-label">// The Outcome</div>
    <h2 className="s-title">Four deliverables.<br /><em>One brief.</em></h2>
    <p className="s-sub">You input your details once. The system outputs a professional identity that is editable, ownable, and ready to deploy.</p>

    <div className="deliverable-grid">
      <div className="d-card gold-tint">
        <div className="d-n">01</div>
        <div className="d-icon">🎨</div>
        <div className="d-name">6-Color Palette</div>
        <div className="d-desc">Named and explained with hex values for immediate use.</div>
        <div className="d-details">
          <span className="d-detail">6 colours</span>
          <span className="d-detail">hex values</span>
          <span className="d-detail">named + explained</span>
          <span className="d-detail">usage guide</span>
        </div>
      </div>
      <div className="d-card">
        <div className="d-n">02</div>
        <div className="d-icon">✦</div>
        <div className="d-name">Typography System</div>
        <div className="d-desc">Google Font pairings with full size scales (H1-Caption).</div>
        <div className="d-details">
          <span className="d-detail">2 font pairing</span>
          <span className="d-detail">Google Fonts</span>
          <span className="d-detail">size scale</span>
          <span className="d-detail">ready to apply</span>
        </div>
      </div>
      <div className="d-card">
        <div className="d-n">03</div>
        <div className="d-icon">◉</div>
        <div className="d-name">Brand Voice Guide</div>
        <div className="d-desc">Tone words, anti-words, and before/after writing examples.</div>
        <div className="d-details">
          <span className="d-detail">tone words</span>
          <span className="d-detail">archetype</span>
          <span className="d-detail">writing examples</span>
          <span className="d-detail">brand story</span>
        </div>
      </div>
      <div className="d-card gold-tint">
        <div className="d-n">04</div>
        <div className="d-icon">◬</div>
        <div className="d-name">Positioning Statement</div>
        <div className="d-desc">Your 12-word anchor for every piece of content you create.</div>
        <div className="d-details">
          <span className="d-detail">one-line statement</span>
          <span className="d-detail">audience defined</span>
          <span className="d-detail">differentiators</span>
          <span className="d-detail">content pillars</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="section-inner">
    <div className="how-grid">
      <div>
        <div className="s-label">// How it works</div>
        <h2 className="s-title">Three steps.<br /><em>Full identity.</em></h2>
        <div className="rule"></div>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-n">01</div>
            <div className="how-body">
              <div className="how-title">Access your Workspace</div>
              <div className="how-sub">Get instant access via Paystack. Duplicate the template and fill in your Brand Input Brief (5 minutes).</div>
            </div>
          </div>
          <div className="how-step">
            <div className="how-n">02</div>
            <div className="how-body">
              <div className="how-title">Run the Frameworks</div>
              <div className="how-sub">Copy the prompts into your AI, replacing brackets with your details. Run 01 through 03 in one conversation (45-60 minutes).</div>
            </div>
          </div>
          <div className="how-step">
            <div className="how-n">03</div>
            <div className="how-body">
              <div className="how-title">Own the System</div>
              <div className="how-sub">Paste the outputs back into your workspace. Your palette, fonts, and voice are now in one place, ready for Canva or your web designer.</div>
            </div>
          </div>
        </div>
        <div style={{marginTop: "20px", fontSize: "11px", color: "var(--warm-grey)", fontFamily: "var(--fm)", letterSpacing: ".06em"}}>No agency. No revisions. No waiting.</div>
      </div>
      <div>
        <div className="s-label" style={{marginBottom: "12px"}}>// Framework 01 of 10 · preview</div>
        <div className="prompt-preview">
          <div className="pp-label">// Brand Foundation: run this first</div>
          <div className="pp-line">You are a brand strategist.</div>
          <div className="pp-line">My venture is <span>[name]</span>.</div>
          <div className="pp-line">We help <span>[audience]</span></div>
          <div className="pp-line">to <span>[outcome]</span>.</div>
          <div className="pp-line dim" style={{marginTop: "8px"}}>Derive: positioning · palette ·</div>
          <div className="pp-line dim">fonts · voice · archetype.<span className="cursor"></span></div>
        </div>
        <div style={{marginTop: "16px"}}>
          <div className="s-label" style={{marginBottom: "12px"}}>// Example output</div>
          <div className="proof-grid">
            <div className="proof-cell gold-tint span2">
              <div className="proof-lbl">Brand palette</div>
              <div className="swatch-row">
                <div className="sw" style={{background: "var(--warm-grey2)"}}></div>
                <div className="sw" style={{background: "var(--gold)"}}></div>
                <div className="sw" style={{background: "var(--gold-light)"}}></div>
                <div className="sw" style={{background: "var(--gold-pale)"}}></div>
                <div className="sw" style={{background: "var(--ink)"}}></div>
                <div className="sw" style={{background: "var(--cream)"}}></div>
              </div>
              <div className="proof-sub">6-colour system. Hex values. Named and explained.</div>
            </div>
            <div className="proof-cell">
              <div className="proof-lbl">Display font</div>
              <div className="proof-val" style={{fontFamily: "'Cormorant Garamond',serif"}}>Cormorant</div>
              <div className="proof-sub">300 weight · italic emphasis</div>
            </div>
            <div className="proof-cell">
              <div className="proof-lbl">Body font</div>
              <div className="proof-val">DM Sans</div>
              <div className="proof-sub">300-500 · 1.7 line height</div>
            </div>
            <div className="proof-cell span2">
              <div className="proof-lbl">Positioning statement</div>
              <div className="proof-val em" style={{fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "14px", color: "var(--warm-grey2)"}}>"Where ventures take root."</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" style={{background: "var(--parchment)"}}>
  <div className="section-inner">
    <div className="s-label">// Who it's for</div>
    <h2 className="s-title">Clarity before<br /><em>scale.</em></h2>
    <p className="s-sub" style={{marginBottom: "36px"}}>If you've been posting inconsistently, hesitating before every piece of content, or watching competitors outpace you visually: this is where you start.</p>
    <div className="audience-grid">
      <div className="aud-card">
        <div className="aud-head">Starting Fresh</div>
        <div className="aud-desc">Build a professional system before you launch to show up with confidence from day one.</div>
      </div>
      <div className="aud-card">
        <div className="aud-head">Outgrown Your Brand</div>
        <div className="aud-desc">Your offer has evolved, but your visuals haven’t. Rebuild without starting from scratch.</div>
      </div>
      <div className="aud-card">
        <div className="aud-head">Ready to Scale</div>
        <div className="aud-desc">Establish a consistent brief before hiring teams or running paid ads.</div>
      </div>
    </div>
  </div>
</section>


<div className="strategy-cta">
  <div className="sc-inner">
    <div className="sc-pre">// Clarity before scale.</div>
    <h2 className="sc-title">Start with<br /><em>Foundation.</em></h2>
    <p className="sc-body">
      <strong>Foundation: Clarity</strong><br/><br/>
      Define your idea, audience, and cultural position.<br/>
      Build your narrative, structure, and strategic base.<br/><br/>
      <em>INCLUDES:</em> Early-stage clarity, Narrative foundations, Brand structure
    </p>
    <Link to="/apply" style={{display: "inline-block", padding: "15px 40px", background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--fb)", fontSize: "11px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", transition: "all .2s"}}>Apply for Foundation →</Link>
  </div>
</div>


<div className="strategy-cta" style={{background: "var(--parchment)", padding: "80px 48px", borderTop: "1px solid rgba(var(--rgb-cream),0.07)", textAlign: "center"}}>
  <div className="sc-inner" style={{maxWidth: "600px", margin: "0 auto"}}>
    <div className="sc-pre" style={{fontFamily: "var(--fm)", fontSize: "9px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px"}}>// The Full Bundle</div>
    <h2 className="sc-title" style={{fontFamily: "var(--fd)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: "32px"}}>Brand <em>OS.</em></h2>
    <p className="sc-body" style={{fontSize: "15px", fontWeight: 300, lineHeight: 1.70, color: "var(--warm-grey)", marginBottom: "40px"}}>
      One system. All three frameworks combined to build your complete brand identity.
    </p>
    <a href="https://paystack.com/buy/art-of-brand-brand-os" target="_blank" className="btn-primary" style={{display: "inline-block", padding: "15px 40px", background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--fb)", fontSize: "11px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", transition: "all .2s"}}>Buy Brand OS →</a>
  </div>
</div>




    </div>
  );
}
