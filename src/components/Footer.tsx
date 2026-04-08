import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <style>{`
        .dojo-footer {
          background: var(--cream);
          color: var(--ink);
          font-family: var(--fb);
          padding: 64px 48px 32px;
        }
        .dojo-footer hr {
          border: none;
          border-top: 1px solid rgba(var(--rgb-warm-grey2), 0.1);
          margin-bottom: 48px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-brand h4 {
          font-family: var(--fd);
          font-size: 24px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .footer-brand p {
          font-family: var(--fm);
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          font-size: 13px;
          font-weight: 300;
          color: var(--warm-grey);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--ink);
        }
        .footer-contact p {
          font-size: 13px;
          font-weight: 300;
          color: var(--warm-grey);
          margin-bottom: 8px;
        }
        .footer-contact a {
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact a:hover {
          color: var(--gold);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 32px;
          border-top: 1px solid rgba(var(--rgb-warm-grey2), 0.1);
          font-family: var(--fm);
          font-size: 10px;
          color: var(--warm-grey);
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .dojo-footer {
            padding: 48px 20px 24px;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
      <footer className="dojo-footer">
        <hr />
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
            </Link>
            <p style={{ fontFamily: 'var(--fd)', fontSize: '16px', fontWeight: 300, fontStyle: 'italic', color: 'var(--warm-grey)', lineHeight: '1.5', marginTop: '10px', textTransform: 'none', letterSpacing: 'normal' }}>Where ventures<br />take root.</p>
          </div>

          <div className="footer-links">
            <div style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(var(--rgb-warm-grey),0.55)', marginBottom: '14px' }}>AI Frameworks</div>
            <Link to="/art-of-brand">Art of Brand</Link>
            <Link to="/campfyer">Campfyer</Link>
          </div>

          <div className="footer-links">
            <div style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(var(--rgb-warm-grey),0.55)', marginBottom: '14px' }}>Apply Now</div>
            <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--warm-grey)', lineHeight: '1.6' }}>
              kaizen /kī′zĕn″/ - Continuous Improvement
            </p>
          </div>

          <div className="footer-cta" style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: '22px', fontWeight: 300, color: 'var(--warm-grey)', marginBottom: '14px', lineHeight: '1.2' }}>Enter the<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Dojo.</em></div>
            <Link to="/apply" style={{ padding: '8px 22px', background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--fb)', fontSize: '10px', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all .2s', display: 'inline-block' }}>Enter Dojo →</Link>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>© 2026 Lotus Room Studio · Nairobi · @lotusroom.studio</p>
          <p>Culture by Design</p>
        </div>
      </footer>
    </>
  );
}
