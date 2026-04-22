import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const isHome = location.pathname === '/';

  const isRooms = location.pathname === '/rooms';

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Show tip after 1200ms
    const showTimer = setTimeout(() => {
      setShowTip(true);
    }, 1200);

    // Hide tip after 6s
    const hideTimer = setTimeout(() => {
      setShowTip(false);
    }, 7200); // 1200 + 6000

    const handleScroll = () => {
      setShowTip(false);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleActionClick = () => {
    // Trigger Flowgent window if available, otherwise fallback to scroll to top
    if (typeof window !== 'undefined' && (window as any).Flowgent) {
      (window as any).Flowgent.open();
    } else {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Main Content */}
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
      
      <AnimatePresence>
        {showTip && (
          <motion.div 
            className="chat-onboarding-tip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            The Studio is open. Speak with us anytime.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Switch Button */}
      <button 
        className="switch-btn"
        onClick={handleActionClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '48px',
          right: '48px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(var(--rgb-cream), 0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(var(--rgb-gold), 0.3)',
          color: 'var(--gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9998,
          transition: 'all 0.3s ease',
          boxShadow: isHovered ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
        }}
        aria-label="Back to top"
      >
        {isHovered ? <Sparkles size={20} /> : <ArrowUp size={20} />}
      </button>
      
      <style>{`
        @media (max-width: 768px) {
          button[aria-label="Back to top"] {
            bottom: 64px !important;
            right: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
