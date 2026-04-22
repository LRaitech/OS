
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Evo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-evo">
      <style>{`
        .page-evo { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
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
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '16px' }}>Room 03</div>
          <h1>EV<em>O.</em></h1>
          <p className="hero-sub">The Revenue Architecture Operating System. Growth systems designed for the emerging African venture.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/apply" className="btn-primary">Join the Waitlist</Link>
            <Link to="/rooms" className="btn-secondary">Back to Rooms</Link>
          </div>
        </FadeIn>
      </header>

      <section>
        <div className="inner">
          <FadeIn>
            <h2>Revenue <em>Systems.</em></h2>
            <p>Moving from random acts of marketing to a repeatable growth machine. EVO is a collection of AI-driven frameworks for unit economics, conversion architecture, and customer acquisition cost (CAC) optimization.</p>
            
            <div className="grid">
              <div className="card">
                <div className="card-title">CAC Architect</div>
                <p>Define your acquisition costs and build the loops that lower them over time.</p>
              </div>
              <div className="card">
                <div className="card-title">Retain OS</div>
                <p>LTV systems for subscription and recurring revenue models.</p>
              </div>
              <div className="card">
                <div className="card-title">Growth Sprint</div>
                <p>12-week execution framework for rapid market testing.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
