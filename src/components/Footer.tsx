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
          display: flex;
          justify-content: space-between;
          gap: 48px;
          margin-bottom: 64px;
          width: 100%;
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
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
          font-family: var(--fm);
          font-size: 10px;
          color: var(--warm-grey);
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .footer-bottom p:nth-child(1) { text-align: left; }
        .footer-bottom p:nth-child(2) { text-align: center; }
        .footer-bottom p:nth-child(3) { text-align: right; }
        @media (max-width: 768px) {
          .dojo-footer {
            padding: 48px 20px 24px;
          }
          .footer-bottom {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .footer-bottom p {
            text-align: center !important;
          }
        }
      `}</style>
      <footer className="dojo-footer">
        <div className="footer-bottom">
          <p>© 2026 Lotus Room Studio · Nairobi ·</p>
          <p style={{ textTransform: 'none' }}>kaizen /kī′zĕn″/ - Continuous Improvement</p>
          <p>Culture by Design</p>
        </div>
      </footer>
    </>
  );
}
