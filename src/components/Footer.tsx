import React from 'react';
import { Link } from 'react-router-dom';
import { IconSankofa } from './HeritageIcons';

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
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
      <footer className="dojo-footer">
        <div className="footer-bottom">
          <span>© 2026 Lotus Room Studio</span>
          <span style={{ textTransform: 'none' }}>kaizen /kī′zĕn″/ - Continuous Improvement</span>
          <span>Culture by Design</span>
        </div>
      </footer>
    </>
  );
}
