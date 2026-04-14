
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Campfyer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'campfyer' | 'build'>('campfyer');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-campfyer">
      <style>{`
        .page-campfyer {
          min-height: 100vh;
        }
        ${ `
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--cream); color: var(--ink);
      font-family: var(--fb);
      min-height: 100vh;
    }

    /* grain */
    body::before {
      content: '';
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.45;
    }

    /* ── HERO ── */
    .hero {
      position: relative;
      min-height: 85vh;
      display: flex; flex-direction: column;
      justify-content: flex-end;
      padding: 0 40px 72px;
      overflow: hidden;
    }
    .hero-art {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      z-index: 0;
    }
    .hero-scrim {
      position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(
        to top,
        rgba(var(--rgb-cream),0.98) 0%,
        rgba(var(--rgb-cream),0.70) 40%,
        rgba(var(--rgb-cream),0.20) 80%,
        transparent 100%
      );
    }
    .hero-content {
      position: relative; z-index: 2;
      max-width: 760px;
    }
    .hero-eyebrow {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 24px;
    }
    .room-tag {
      font-family: var(--fm);
      font-size: 9px; letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--gold-light);
      background: rgba(var(--rgb-gold-dark),0.10);
      border: 1px solid rgba(var(--rgb-gold-dark),0.28);
      padding: 5px 12px;
    }
    .room-sep { width: 24px; height: 1px; background: rgba(var(--rgb-ink),0.20); }
    .room-num {
      font-family: var(--fm);
      font-size: 9px; letter-spacing: .18em;
      color: rgba(var(--rgb-ink),0.28);
      text-transform: uppercase;
    }
    .hero-title {
      font-family: var(--fd);
      font-size: clamp(52px, 8vw, 88px);
      font-weight: 300;
      line-height: .92; letter-spacing: -.03em;
      color: var(--ink);
      margin-bottom: 24px;
    }
    .hero-title em { font-style: italic; color: var(--gold-light); }
    .hero-desc {
      font-size: 17px; font-weight: 300;
      line-height: 1.65; color: rgba(var(--rgb-ink),0.60);
      max-width: 560px; margin-bottom: 36px;
    }
    .hero-actions {
      display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    }
    .btn-primary {
      padding: 16px 40px;
      background: rgba(var(--rgb-gold-dark),0.12);
      border: 1px solid rgba(var(--rgb-gold-dark),0.50);
      color: var(--gold-light);
      font-family: var(--fb);
      font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase;
      cursor: pointer; text-decoration: none;
      transition: background .15s;
      display: inline-block;
    }
    .btn-primary:hover { background: rgba(var(--rgb-gold-dark),0.22); }
    .hero-price-label {
      font-family: var(--fd);
      font-size: 22px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.40);
    }
    .hero-price-label strong { color: var(--gold-light); font-weight: 300; }
    .hero-scroll {
      position: absolute;
      bottom: 28px; right: 40px; z-index: 2;
      font-family: var(--fm);
      font-size: 9px; letter-spacing: .14em;
      text-transform: uppercase;
      color: rgba(var(--rgb-ink),0.22);
      display: flex; align-items: center; gap: 8px;
    }

    /* ── PROOF BAR ── */
    .proof-bar {
      position: relative; z-index: 1;
      display: grid; grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid rgba(var(--rgb-cream),0.07);
      border-bottom: 1px solid rgba(var(--rgb-ink),0.07);
    }
    .proof-item {
      padding: 28px 32px;
      border-right: 1px solid rgba(var(--rgb-cream),0.07);
    }
    .proof-item:last-child { border-right: none; }
    .proof-num {
      font-family: var(--fd);
      font-size: 40px; font-weight: 300;
      color: var(--gold-light);
      line-height: 1; letter-spacing: -.03em;
      margin-bottom: 4px;
    }
    .proof-label {
      font-size: 12px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.40);
      line-height: 1.4;
    }

    /* ── WHAT YOU GET ── */
    .section {
      position: relative; z-index: 1;
      padding: 80px 40px;
      border-bottom: 1px solid rgba(var(--rgb-ink),0.06);
    }
    .section-inner { max-width: 920px; margin: 0 auto; }
    .s-label {
      font-family: var(--fm);
      font-size: 9px; letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(var(--rgb-ink),0.28);
      margin-bottom: 16px;
    }
    .s-title {
      font-family: var(--fd);
      font-size: 48px; font-weight: 300;
      line-height: 1.0; letter-spacing: -.02em;
      color: var(--ink);
      margin-bottom: 14px;
    }
    .s-title em { font-style: italic; color: var(--gold-light); }
    .s-sub {
      font-size: 15px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.52);
      line-height: 1.65;
      max-width: 540px; margin-bottom: 48px;
    }

    /* deliverable cards */
    .deliverable-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .d-card {
      padding: 28px 28px;
      background: rgba(var(--rgb-ink),0.02);
      border: 1px solid rgba(var(--rgb-ink),0.08);
      position: relative;
      overflow: hidden;
    }
    .d-card::before {
      content: '';
      position: absolute; top: 0; left: 0;
      width: 100%; height: 2px;
      background: linear-gradient(90deg, var(--warm-grey2), transparent);
    }
    .d-card.amber::before { background: linear-gradient(90deg, var(--gold-pale), transparent); }
    .d-num {
      font-family: var(--fd);
      font-size: 48px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.06);
      line-height: 1;
      position: absolute; top: 16px; right: 20px;
    }
    .d-icon {
      font-size: 20px; margin-bottom: 14px;
    }
    .d-name {
      font-family: var(--fd);
      font-size: 22px; font-weight: 400;
      color: var(--ink);
      margin-bottom: 6px;
    }
    .d-desc {
      font-size: 13px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.45);
      line-height: 1.6;
      margin-bottom: 14px;
    }
    .d-details {
      display: flex; flex-wrap: wrap; gap: 6px;
    }
    .d-detail {
      font-family: var(--fm);
      font-size: 10px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.38);
      background: rgba(var(--rgb-ink),0.04);
      border: 1px solid rgba(var(--rgb-ink),0.08);
      padding: 3px 9px;
      letter-spacing: .04em;
    }

    /* ── INSIDE THE BOX ── */
    .inside-list {
      display: flex; flex-direction: column; gap: 0;
      margin-top: 16px;
    }
    .inside-row {
      display: flex; align-items: center; gap: 20px;
      padding: 18px 0;
      border-bottom: 1px solid rgba(var(--rgb-ink),0.05);
    }
    .inside-row:last-child { border-bottom: none; }
    .inside-check {
      width: 20px; height: 20px;
      border: 1px solid rgba(var(--rgb-warm-grey2),0.50);
      background: rgba(var(--rgb-warm-grey2),0.10);
      display: flex; align-items: center; justify-content: center;
      font-size: 10px; color: var(--warm-grey2);
      flex-shrink: 0;
    }
    .inside-text {
      font-size: 14px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.72);
      line-height: 1.4;
    }
    .inside-text strong { font-weight: 500; color: var(--ink); }

    /* ── PRICING ── */
    .pricing-section {
      position: relative; z-index: 1;
      padding: 80px 40px;
      background: linear-gradient(150deg, rgba(var(--rgb-warm-grey2),0.25) 0%, rgba(var(--rgb-warm-grey),0.25) 100%);
      border-bottom: 1px solid rgba(var(--rgb-ink),0.06);
    }
    .pricing-inner { max-width: 920px; margin: 0 auto; }
    .pricing-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 48px;
    }
    .price-card {
      padding: 36px 32px;
      border: 1px solid rgba(var(--rgb-ink),0.10);
      background: rgba(var(--rgb-ink),0.02);
      display: flex; flex-direction: column;
    }
    .price-card.featured {
      border-color: rgba(var(--rgb-gold-dark),0.35);
      background: rgba(var(--rgb-gold-dark),0.04);
    }
    .price-tier {
      font-family: var(--fm);
      font-size: 9px; letter-spacing: .16em;
      text-transform: uppercase;
      color: rgba(var(--rgb-ink),0.35);
      margin-bottom: 20px;
    }
    .price-card.featured .price-tier { color: var(--gold); }
    .price-amount {
      font-family: var(--fd);
      font-size: 64px; font-weight: 300;
      color: var(--ink);
      line-height: 1; letter-spacing: -.04em;
      margin-bottom: 6px;
    }
    .price-card.featured .price-amount { color: var(--gold-light); }
    .price-note {
      font-size: 12px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.35);
      margin-bottom: 28px;
      font-family: var(--fm);
    }
    .price-includes {
      display: flex; flex-direction: column; gap: 10px;
      flex: 1; margin-bottom: 28px;
    }
    .pi-row {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 13px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.60);
      line-height: 1.4;
    }
    .pi-row::before {
      content: '·';
      color: rgba(var(--rgb-ink),0.20);
      flex-shrink: 0;
      font-family: var(--fm);
      font-size: 11px;
    }
    .price-card.featured .pi-row { color: rgba(var(--rgb-ink),0.75); }
    .price-btn {
      display: block;
      padding: 14px 24px;
      border: 1px solid rgba(var(--rgb-ink),0.18);
      color: rgba(var(--rgb-ink),0.55);
      font-family: var(--fb);
      font-size: 10px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase;
      text-align: center; cursor: pointer;
      text-decoration: none;
      transition: all .15s;
      background: transparent;
    }
    .price-btn:hover { border-color: rgba(var(--rgb-ink),0.35); color: var(--ink); }
    .price-btn.featured-btn {
      background: rgba(var(--rgb-gold-dark),0.10);
      border-color: rgba(var(--rgb-gold-dark),0.50);
      color: var(--gold-light);
    }
    .price-btn.featured-btn:hover { background: rgba(var(--rgb-gold-dark),0.20); }

    /* ── FOOTER ── */
    footer {
      position: relative; z-index: 1;
      padding: 40px 40px;
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(var(--rgb-cream),0.06);
    }
    .footer-left {
      font-family: var(--fd);
      font-size: 14px; font-weight: 300;
      color: rgba(var(--rgb-ink),0.25);
    }
    .footer-right {
      font-family: var(--fm);
      font-size: 10px; letter-spacing: .10em;
      color: rgba(var(--rgb-ink),0.20);
    }

    @media (max-width: 1024px) {
      .hero { padding: 0 20px 60px; }
      .section { padding: 56px 20px; }
      .deliverable-grid { grid-template-columns: 1fr; }
      .pricing-section { padding: 56px 20px; }
      .pricing-grid { grid-template-columns: 1fr; }
      .proof-bar { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 680px) {
      footer { flex-direction: column; gap: 12px; padding: 28px 20px; text-align: center; }
    }
  `.replace(/body/g, `.page-campfyer`) }
      `}</style>






<section className="hero">
  <svg className="hero-art" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="h1" cx="75%" cy="25%" r="65%">
        <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.75"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="h2" cx="15%" cy="75%" r="60%">
        <stop offset="0%" stopColor="var(--warm-grey2)" stopOpacity="0.70"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="1440" height="860" fill="var(--cream)"/>
    <rect width="1440" height="860" fill="url(#h1)"/>
    <rect width="1440" height="860" fill="url(#h2)"/>
    <g opacity="0.40" fill="none">
      <path d="M0,200 C200,130 400,260 600,190 C800,120 1000,240 1200,170 C1350,115 1420,180 1440,165" stroke="var(--gold-pale)" strokeWidth="1.5"/>
      <path d="M0,250 C200,178 400,308 600,238 C800,168 1000,288 1200,218 C1350,162 1420,228 1440,212" stroke="var(--gold-pale)" strokeWidth="1" opacity=".6"/>
      <path d="M0,310 C200,238 400,365 600,295 C800,225 1000,348 1200,278 C1350,220 1420,288 1440,272" stroke="var(--gold-light)" strokeWidth="1" opacity=".5"/>
      <path d="M0,420 C200,348 400,472 600,402 C800,332 1000,455 1200,385 C1350,328 1420,395 1440,378" stroke="var(--warm-grey2)" strokeWidth="2" opacity=".55"/>
      <path d="M0,500 C200,428 400,552 600,482 C800,412 1000,535 1200,465 C1350,408 1420,475 1440,458" stroke="var(--warm-grey2)" strokeWidth="1.5" opacity=".45"/>
      <path d="M0,600 C200,528 400,650 600,580 C800,510 1000,632 1200,562 C1350,506 1420,572 1440,555" stroke="var(--warm-grey2)" strokeWidth="1" opacity=".40"/>
    </g>
    <path d="M1100,0 C1280,80 1440,50 1440,0Z" fill="var(--gold)" opacity="0.15"/>
    <path d="M0,680 C200,640 420,700 600,670 C780,640 1000,700 1200,668 C1350,644 1430,670 1440,665 L1440,860 L0,860Z" fill="var(--warm-grey2)" opacity="0.35"/>
  </svg>
  <div className="hero-scrim"></div>
  <div className="hero-content">
    <div className="hero-eyebrow">
      <div className="room-tag">Campfyer</div>
      <div className="room-sep"></div>
      <div className="room-num">Room 02 · Lotus Room</div>
    </div>
    <h1 className="hero-title">Full campaign.<br /><em>One session.</em></h1>
    <p className="hero-desc">Run it every month, forever.</p>
    <div className="hero-actions">
      <a href="#pricing" className="btn-primary">Get instant access →</a>
      <div className="hero-price-label">From <strong>$15</strong></div>
    </div>
  </div>
  <div className="hero-scroll">Scroll to explore ↓</div>
</section>


<div className="proof-bar">
  <div className="proof-item">
    <div className="proof-num">8</div>
    <div className="proof-label">AI Frameworks. One session.</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">4</div>
    <div className="proof-label">Core deliverables</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">60<span style={{fontSize: "24px"}}>min</span></div>
    <div className="proof-label">From brief to full campaign</div>
  </div>
  <div className="proof-item">
    <div className="proof-num">∞</div>
    <div className="proof-label">Run it every month, forever</div>
  </div>
</div>


<section className="section">
  <div className="section-inner">
    <div className="s-label">// The AI Frameworks</div>
    <h2 className="s-title">8 AI Frameworks.<br /><em>One session.</em></h2>
    <p className="s-sub">A high-velocity content engine that converts a single core insight into a complete 30-day marketing campaign. No agency, no guesswork, no waiting.</p>

    <div className="deliverable-grid">
      <div className="d-card">
        <div className="d-num">01</div>
        <div className="d-icon">◈</div>
        <div className="d-name">The Campaign System</div>
        <div className="d-desc">The fundamental engine. 8 sequential frameworks to build your strategy, creative, and calendar in under 60 minutes.</div>
        <div className="d-details">
          <span className="d-detail">Strategy brief</span>
          <span className="d-detail">5 Carousel scripts</span>
          <span className="d-detail">15 Captions</span>
          <span className="d-detail">28-day Calendar</span>
          <span className="d-detail">Hashtag sets</span>
        </div>
        <div style={{marginTop: "24px"}}>
          <div style={{fontFamily: "var(--fd)", fontSize: "20px", color: "var(--gold-light)", marginBottom: "12px"}}>$15</div>
          <a href="https://paystack.com/buy/campfyer-campaign-system" target="_blank" className="btn-primary" style={{padding: "10px 20px", fontSize: "10px"}}>Buy Campaign System →</a>
        </div>
      </div>
      <div className="d-card amber">
        <div className="d-num">02</div>
        <div className="d-icon">◉</div>
        <div className="d-name">The Full Room</div>
        <div className="d-desc">The complete content ecosystem. Everything in the $15 system plus advanced tracking and long-term strategy tools.</div>
        <div className="d-details">
          <span className="d-detail">All 8 Frameworks</span>
          <span className="d-detail">90-day strategy framework</span>
          <span className="d-detail">Notion post tracker</span>
          <span className="d-detail">Expanded Caption system</span>
          <span className="d-detail">Priority access to Room 03</span>
        </div>
        <div style={{marginTop: "24px"}}>
          <div style={{fontFamily: "var(--fd)", fontSize: "20px", color: "var(--gold-light)", marginBottom: "12px"}}>$50</div>
          <a href="https://paystack.com/buy/campfyer-content-os" target="_blank" className="btn-primary" style={{padding: "10px 20px", fontSize: "10px"}}>Buy Full Room →</a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" style={{background: "rgba(var(--rgb-cream),0.01)"}}>
  <div className="section-inner">
    <div className="s-label">// The Outcome</div>
    <h2 className="s-title">Four core deliverables.<br /><em>One brief.</em></h2>
    <p className="s-sub">Input your campaign details once. The system outputs a professional-grade content presence ready to publish.</p>

    <div className="deliverable-grid">
      <div className="d-card">
        <div className="d-num">01</div>
        <div className="d-icon">◈</div>
        <div className="d-name">Carousel Scripts</div>
        <div className="d-desc">5 concepts with 7-slide structures, visual direction, and alt-text.</div>
      </div>
      <div className="d-card amber">
        <div className="d-num">02</div>
        <div className="d-icon">◉</div>
        <div className="d-name">Caption Suite</div>
        <div className="d-desc">3 variations per post (Story-led, Direct Value, Provocative) matched to your voice.</div>
      </div>
      <div className="d-card">
        <div className="d-num">03</div>
        <div className="d-icon">◫</div>
        <div className="d-name">4-Week Calendar</div>
        <div className="d-desc">28-day schedule mapped from Awareness to Conversion.</div>
      </div>
      <div className="d-card amber">
        <div className="d-num">04</div>
        <div className="d-icon">◬</div>
        <div className="d-name">Repurpose Engine</div>
        <div className="d-desc">Turn every carousel into 5 formats: LinkedIn, X threads, Email, Reels, and Newsletters.</div>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="section-inner">
    <div className="s-label">// How it works</div>
    <h2 className="s-title">One conversation.<br /><em>60 minutes.</em></h2>

    <div className="inside-list" style={{marginTop: "40px"}}>
      <div className="inside-row">
        <div className="inside-check">01</div>
        <div className="inside-text"><strong>Fill the Brief</strong>: Define your audience, offer, and the "core insight" your audience is missing.</div>
      </div>
      <div className="inside-row">
        <div className="inside-check">02</div>
        <div className="inside-text"><strong>Run the Sprint</strong>: Copy and paste Frameworks 01-08 into a single AI conversation. Each framework builds on the context of the last.</div>
      </div>
      <div className="inside-row">
        <div className="inside-check">03</div>
        <div className="inside-text"><strong>Refine & Repeat</strong>: At month-end, paste your analytics into Framework 08. The system generates a sharper brief for next month automatically.</div>
      </div>
    </div>
  </div>
</section>

<section className="section" style={{background: "rgba(var(--rgb-cream),0.01)"}}>
  <div className="section-inner">
    <div className="s-label">// Inside the System</div>
    <h2 className="s-title">Everything you<br /><em>need to run it.</em></h2>

    <div className="inside-list" style={{marginTop: "40px"}}>
      <div className="inside-row">
        <div className="inside-check">✓</div>
        <div className="inside-text"><strong>Workspace Template</strong>: Pre-structured Notion workspace with all 8 frameworks loaded.</div>
      </div>
      <div className="inside-row">
        <div className="inside-check">✓</div>
        <div className="inside-text"><strong>Video Walkthrough</strong>: See the system run from brief to final output in real-time.</div>
      </div>
      <div className="inside-row">
        <div className="inside-check">✓</div>
        <div className="inside-text"><strong>Repurpose Engine (F07)</strong>: Instantly convert 5 carousels into 25+ pieces of multi-platform content.</div>
      </div>
      <div className="inside-row">
        <div className="inside-check">✓</div>
        <div className="inside-text"><strong>Monthly Review (F08)</strong>: A built-in feedback loop that makes your content 20% sharper every cycle.</div>
      </div>
    </div>
  </div>
</section>

<div className="strategy-cta" style={{background: "var(--parchment)", padding: "80px 48px", borderTop: "1px solid rgba(var(--rgb-cream),0.07)", textAlign: "center"}}>
  <div className="sc-inner" style={{maxWidth: "600px", margin: "0 auto"}}>
    <div className="sc-pre" style={{fontFamily: "var(--fm)", fontSize: "9px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px"}}>// Seen before scale.</div>
    <h2 className="sc-title" style={{color: "var(--ink)", fontFamily: "var(--fd)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-.02em", marginBottom: "32px"}}>Get <em>Campfyer.</em></h2>
    
    <div style={{display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "64px"}}>
      <a href="https://paystack.com/buy/campfyer-campaign-system" target="_blank" className="btn-primary" style={{borderColor: "var(--gold)", color: "var(--gold)"}}>The Campaign System →</a>
      <a href="https://paystack.com/buy/campfyer-content-os" target="_blank" className="btn-primary" style={{borderColor: "var(--gold)", color: "var(--gold)"}}>The Full Room →</a>
    </div>

    <div style={{ borderTop: "1px solid rgba(var(--rgb-ink), 0.1)", paddingTop: "48px", textAlign: "left" }}>
      <div style={{fontFamily: "var(--fm)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px"}}>Featured Start</div>
      <h3 style={{fontFamily: "var(--fd)", fontSize: "32px", color: "var(--ink)", marginBottom: "8px"}}>The <em>Build.</em></h3>
      
      <p style={{fontSize: "15px", fontWeight: 300, lineHeight: 1.70, color: "rgba(var(--rgb-ink),0.7)", marginBottom: "32px"}}>
        Turn your vision into public presence.<br/>
        We create creator-led brands as systems that move with precision - where strategy, design, and AI work in sync to make your brand visible, felt, and followed.<br/><br/>
        <em style={{color: "var(--gold)", fontStyle: "italic"}}>INCLUDES:</em> Content creation, Campaign execution, Storytelling systems
      </p>
      <a href="https://paystack.com/buy/02--build-1200-fpccve" target="_blank" className="btn-primary" style={{borderColor: "var(--gold)", color: "var(--gold)", display: "inline-block"}}>Turn vision into visibility →</a>
    </div>
  </div>
</div>








    </div>
  );
}
