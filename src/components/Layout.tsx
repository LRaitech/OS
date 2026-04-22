import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import ChatInterface from './ChatInterface';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [fabMode, setFabMode] = useState<'up' | 'chat'>('up');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollEndTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHome = location.pathname === '/';

  const isRooms = location.pathname === '/rooms';

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Peeks out 1.5 seconds after stop
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

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
      
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Unified Action Button System (Bottom Right) */}
      <div style={{ position: 'fixed', bottom: '48px', right: '48px', zIndex: 9998, display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
        
        {/* Core Container */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
          
          {/* Back to Top Button (Primary) */}
          <motion.button 
            className="action-btn up-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              document.body.scrollTo({ top: 0, behavior: 'smooth' });
              document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(var(--rgb-cream), 0.95)',
              border: '1px solid rgba(var(--rgb-gold), 0.4)',
              color: 'var(--gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              backdropFilter: 'blur(16px)',
              zIndex: 10,
              position: 'relative'
            }}
            aria-label="Scroll to top"
          >
            <div style={{ position: 'relative' }}>
              <ArrowUp size={24} />
              {/* Subtle Chat Indicator when idle */}
              {!isScrolling && !isChatOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    position: 'absolute', 
                    top: -4, 
                    right: -10, 
                    background: 'var(--gold)',
                    borderRadius: '50%',
                    width: '14px',
                    height: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white'
                  }}
                >
                  <Sparkles size={8} color="white" />
                </motion.div>
              )}
            </div>
          </motion.button>

          {/* Chat Button (The "Peek" Button) */}
          <AnimatePresence>
            {!isScrolling && !isChatOpen && (
              <motion.button 
                className="action-btn chat-peek-btn"
                onClick={() => setIsChatOpen(true)}
                initial={{ x: 20, opacity: 0, scale: 0.8 }}
                animate={{ x: -64, opacity: 1, scale: 1 }}
                exit={{ x: 20, opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                style={{
                  position: 'absolute',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(var(--rgb-gold), 0.4)',
                  zIndex: 5
                }}
                aria-label="Open Chat Guide"
              >
                <Sparkles size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      
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
