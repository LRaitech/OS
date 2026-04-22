import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <style>{`
        .universal-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          height: 32px;
          border-top: 0.5px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          font-family: var(--fd); /* Cormorant Garamond */
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--warm-grey);
        }
        
        .uf-desktop { display: flex; width: 100%; justify-content: space-between; align-items: center; }
        .uf-tablet { display: none; width: 100%; justify-content: space-between; align-items: center; }
        .uf-mobile { display: none; width: 100%; flex-direction: column; justify-content: center; gap: 4px; height: 100%; }
        .uf-mobile-r1 { display: flex; justify-content: space-between; width: 100%; }
        .uf-mobile-r2 { text-align: center; width: 100%; }

        @media (max-width: 1024px) {
          .uf-desktop { display: none; }
          .uf-tablet { display: flex; font-size: 10px; }
          .universal-footer { padding: 0 24px; }
        }

        @media (max-width: 768px) {
          .universal-footer {
            height: 48px;
            padding: 0 20px;
          }
          .uf-tablet { display: none; }
          .uf-mobile { display: flex; font-size: 10px; }
        }
      `}</style>
      <motion.footer 
        className="universal-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      >
        {/* Desktop */}
        <div className="uf-desktop">
          <span>© 2026 Lotus Room Studio</span>
          <span>—</span>
          <span style={{ textTransform: 'none' }}>kaizen /kī′zĕn″/</span>
          <span>—</span>
          <span>Continuous Improvement</span>
          <span>—</span>
          <span>Culture by Design</span>
        </div>

        {/* Tablet */}
        <div className="uf-tablet">
          <span>© 2026 Lotus Room Studio</span>
          <span>—</span>
          <span style={{ textTransform: 'none' }}>kaizen</span>
          <span>—</span>
          <span>Continuous Improvement</span>
          <span>—</span>
          <span>Culture by Design</span>
        </div>

        {/* Mobile */}
        <div className="uf-mobile">
          <div className="uf-mobile-r1">
            <span>© 2026 Lotus Room Studio</span>
            <span>Culture by Design</span>
          </div>
          <div className="uf-mobile-r2">
            <span style={{ textTransform: 'none' }}>kaizen</span> — Continuous Improvement
          </div>
        </div>
      </motion.footer>
    </>
  );
}
