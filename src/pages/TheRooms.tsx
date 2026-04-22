
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function TheRooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-therooms">
      <style>{`
        .page-therooms {
          background: var(--cream);
        }
        
        .snap-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 48px;
          position: relative;
          border-bottom: 1px solid rgba(var(--rgb-warm-grey2), 0.08);
          overflow: hidden;
        }
        
        .snap-section.alt {
          background: var(--parchment);
        }
        
        .section-inner {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px;
          align-items: center;
        }
        
        .section-inner.rev {
          grid-template-columns: 400px 1fr;
        }
        .section-inner.rev > div:first-child { order: 2; }
        .section-inner.rev > div:last-child { order: 1; }
        
        .rs-num {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .18em;
          color: var(--ink);
          margin-bottom: 16px;
          text-transform: uppercase;
          font-weight: 600;
        }
        
        .snap-section h2 {
          font-family: var(--fd);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -.02em;
          color: var(--ink);
          margin-bottom: 20px;
        }
        
        .snap-section h2 em {
          font-style: italic;
          color: var(--gold);
        }
        
        .room-subtitle {
          font-family: var(--fm);
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--ink);
          margin-bottom: 24px;
          font-weight: 600;
        }
        
        .room-desc {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--ink);
          margin-bottom: 32px;
          max-width: 540px;
        }
        
        .rule {
          width: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
          margin: 24px 0;
        }
        
        .price-card {
          padding: 48px 40px;
          border: 1px solid rgba(var(--rgb-gold), 0.35);
          background: rgba(var(--rgb-gold), 0.03);
          text-align: center;
          position: relative;
        }
        
        .price-card.waitlist {
          border-color: rgba(var(--rgb-warm-grey2), 0.2);
          background: var(--cream);
        }
        
        .pc-label {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        
        .price-card.waitlist .pc-label {
          color: var(--warm-grey);
        }
        
        .pc-title {
          font-family: var(--fd);
          font-size: 32px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 12px;
        }
        
        .pc-note {
          font-size: 14px;
          font-weight: 400;
          color: var(--ink-soft);
          margin-bottom: 32px;
          line-height: 1.5;
        }
        
        .pc-btn {
          display: block;
          padding: 16px 32px;
          background: rgba(var(--rgb-gold), 0.08);
          border: 1px solid rgba(var(--rgb-gold), 0.50);
          color: var(--gold);
          font-family: var(--fb);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .14em;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          transition: all .2s;
        }
        
        .pc-btn:hover {
          background: var(--gold);
          color: var(--cream);
        }
        
        .price-card.waitlist .pc-btn {
          background: transparent;
          border-color: rgba(var(--rgb-warm-grey2), 0.3);
          color: var(--warm-grey2);
        }
        
        .price-card.waitlist .pc-btn:hover {
          border-color: var(--ink);
          color: var(--ink);
        }
        
        .waitlist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          width: 100%;
        }
        
        .waitlist-item {
          padding: 24px;
          border: 1px solid rgba(var(--rgb-warm-grey2), 0.15);
          background: var(--cream);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .wl-info h3 {
          font-family: var(--fd);
          font-size: 24px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 4px;
        }
        
        .wl-info p {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--warm-grey);
        }
        
        .wl-btn {
          padding: 10px 20px;
          border: 1px solid rgba(var(--rgb-warm-grey2), 0.3);
          color: var(--warm-grey2);
          font-family: var(--fb);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: .14em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all .2s;
        }
        
        .wl-btn:hover {
          border-color: var(--ink);
          color: var(--ink);
        }

        @media(max-width: 1024px) {
          .snap-section {
            height: auto;
            min-height: auto;
            padding: 100px 24px 64px;
          }
          .section-inner, .section-inner.rev {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .section-inner.rev > div:first-child { order: 1; }
          .section-inner.rev > div:last-child { order: 2; }
          .waitlist-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>

      {/* SECTION 01: ART OF BRAND */}
      <section className="snap-section" id="art-of-brand" style={{ position: 'relative' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(var(--rgb-gold), 0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
          <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(var(--rgb-gold), 0.05) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
        </div>
        <svg className="globe-artifact artifact-svg" viewBox="0 0 500 500" style={{ width: '500px', height: '500px', left: '-100px', top: '50%' }}>
          <circle cx="250" cy="250" r="240" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
          <ellipse cx="250" cy="250" rx="240" ry="80" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
          <ellipse cx="250" cy="250" rx="80" ry="240" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="var(--ink)" strokeWidth="0.5" />
        </svg>
        <FadeIn className="section-inner" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <div className="rs-num">Section 01</div>
            <h2>Art of<br /><em>Brand</em></h2>
            <div className="room-subtitle">AI-driven identity systems for founders.</div>
            <div className="rule"></div>
            <p className="room-desc">Build a complete visual and verbal identity in 60 minutes. This system extracts your founder narrative and converts it into a professional brand kit through three structured AI frameworks.</p>
            <Link to="/art-of-brand" style={{fontSize: "13px", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid rgba(var(--rgb-gold),0.35)", paddingBottom: "2px", textTransform: "uppercase", letterSpacing: "0.1em"}}>Read More →</Link>
          </div>
          <div>
            <div className="price-card">
              <div className="pc-label">Room 01</div>
              <div className="pc-title">Brand OS</div>
              <div className="pc-note">Complete brand identity ready to deploy. Strategy, Visuals, Voice, and Web architecture.</div>
              <a href="https://paystack.com/buy/art-of-brand-brand-os" target="_blank" rel="noreferrer" className="pc-btn">Get Access →</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 02: CAMPFYER */}
      <section className="snap-section alt" id="campfyer" style={{ position: 'relative' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '50%', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(var(--rgb-gold), 0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        </div>
        <FadeIn className="section-inner rev" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <div className="rs-num">Section 02</div>
            <h2>Camp<em>fyer</em></h2>
            <div className="room-subtitle">The 30-day content engine.</div>
            <div className="rule"></div>
            <p className="room-desc">Stop the hashtag guesswork. Campfyer converts a single core insight into a high-converting, 4-week content arc in under 60 minutes. No agency, no revisions, no waiting.</p>
            <Link to="/campfyer" style={{fontSize: "13px", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid rgba(var(--rgb-gold),0.35)", paddingBottom: "2px", textTransform: "uppercase", letterSpacing: "0.1em"}}>Read More →</Link>
          </div>
          <div>
            <div className="price-card">
              <div className="pc-label">Room 02</div>
              <div className="pc-title">Content OS</div>
              <div className="pc-note">Complete 30-day content campaign ready to publish. Strategy, Creative, Copy, and Distribution.</div>
              <a href="https://paystack.com/buy/campfyer-content-os" target="_blank" rel="noreferrer" className="pc-btn">Get Access →</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 03-05: WAITLIST */}
      <section className="snap-section" id="upcoming-rooms">
        <FadeIn className="section-inner" style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="rs-num">Sections 03-05</div>
            <h2>The Next<br /><em>Rooms</em></h2>
            <div className="room-subtitle">Revenue, Culture, and Positioning</div>
            <div className="rule" style={{ margin: '24px auto' }}></div>
            <p className="room-desc" style={{ margin: '0 auto' }}>The complete operating system for your venture is expanding. Join the waitlist for early access to our upcoming rooms.</p>
          </div>
          
          <div className="waitlist-grid">
            <div className="waitlist-item">
              <div className="wl-info">
                <h3>EV<em>O.</em></h3>
                <p>Revenue architecture · Growth systems</p>
              </div>
              <Link to="/evo" className="wl-btn">Explore Room →</Link>
            </div>
            
            <div className="waitlist-item">
              <div className="wl-info">
                <h3>Beat <em>Therapy.</em></h3>
                <p>Creative process · Cultural strategy</p>
              </div>
              <Link to="/beat-therapy" className="wl-btn">Explore Room →</Link>
            </div>
            
            <div className="waitlist-item">
              <div className="wl-info">
                <h3>Deep<em>er.</em></h3>
                <p>Investor narrative · Unit economics</p>
              </div>
              <Link to="/deeper" className="wl-btn">Explore Room →</Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
