
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Deeper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-deeper">
      <style>{`
        .page-deeper { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
        .hero { position: relative; min-height: 80vh; display: flex; flex-direction: column; justify-content: center; padding: 160px 48px 80px; text-align: center; }
        h1 { font-family: var(--fd); font-size: clamp(64px, 10vw, 120px); font-weight: 500; line-height: 0.93; letter-spacing: -0.02em; margin-bottom: 32px; }
        h1 em { font-style: italic; color: var(--gold); }
        .hero-sub { font-size: 20px; font-weight: 400; line-height: 1.65; color: var(--ink-soft); max-width: 800px; margin: 0 auto 48px; }
        
        section { padding: 120px 48px; border-bottom: 1px solid rgba(var(--rgb-ink), 0.05); }
        .inner { max-width: 1100px; margin: 0 auto; }
        h2 { font-family: var(--fd); font-size: clamp(36px, 5vw, 64px); font-weight: 500; margin-bottom: 24px; }
        p { font-size: 18px; font-weight: 400; line-height: 1.7; color: var(--ink-soft); margin-bottom: 24px; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-top: 48px; }
        .card { padding: 40px; background: var(--parchment); border-left: 3px solid var(--gold); }
        .card-title { font-family: var(--fd); font-size: 28px; font-weight: 500; margin-bottom: 16px; }
        
        @media(max-width: 768px) {
          .hero { padding: 120px 20px 60px; }
          section { padding: 64px 20px; }
        }
      `}</style>

      <header className="hero">
        <FadeIn>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '16px' }}>Room 05</div>
          <h1>Deep<em>er.</em></h1>
          <p className="hero-sub">Investor Narrative & Unit Economics. For founders moving from product-market fit to venture readiness.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/apply" className="btn-primary">Join the Waitlist</Link>
            <Link to="/rooms" className="btn-secondary">Back to Rooms</Link>
          </div>
        </FadeIn>
      </header>

      <section>
        <div className="inner">
          <FadeIn>
            <h2>Structural <em>Resilience.</em></h2>
            <p>Moving beyond the hype. Deeper builds the documentation and data structures that investors actually care about. Defensibility, unit economics, and long-term moat architecture.</p>
            
            <div className="grid">
              <div className="card">
                <div className="card-title">Venture Narrative</div>
                <p>Translating your founder vision into institutional-grade pitch architecture.</p>
              </div>
              <div className="card">
                <div className="card-title">Economic Model</div>
                <p>Building the unit economic calculators that prove your business model scales.</p>
              </div>
              <div className="card">
                <div className="card-title">Defensibility OS</div>
                <p>Identifying and protecting your proprietary data, IP, and market position.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
