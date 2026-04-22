import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '64px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: 'rgba(var(--rgb-cream), 0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(var(--rgb-ink), 0.05)',
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
              <span className="nav-wordmark desktop-logo" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--ink)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
              <span className="nav-wordmark mobile-logo" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--ink)', fontSize: '16px', fontWeight: 600, letterSpacing: '0.08em', display: 'none' }}>LR</span>
            </Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} style={{ display: isMenuOpen ? 'flex' : 'none', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="glow-hover" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Home</Link></li>
              <li><Link to="/rooms" onClick={() => setIsMenuOpen(false)} className="glow-hover" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Rooms</Link></li>
              <li><Link to="/dojo" onClick={() => setIsMenuOpen(false)} className="glow-hover" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Dojo</Link></li>
              <li><Link to="/insights" onClick={() => setIsMenuOpen(false)} className="glow-hover" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Insights</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="glow-hover" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Contact</Link></li>
            </ul>

            <button 
              onClick={() => setIsDark(!isDark)} 
              className={`theme-toggle ${isDark ? 'theme-toggle-active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isDark ? '#D4AF37' : 'var(--warm-grey)' }}
            >
              {isDark ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
            </button>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', color: isMenuOpen ? 'var(--cream)' : 'var(--ink)', cursor: 'pointer', display: 'none', zIndex: 1001 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <style>{`
          @media(min-width: 1025px) {
            .nav-links { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
          @media(max-width: 1024px) {
            nav { height: 56px !important; padding: 0 20px !important; flex-direction: row; align-items: center; }
          .desktop-logo { display: none !important; }
          .mobile-logo { display: block !important; }
          .mobile-menu-btn { display: block !important; z-index: 1001; }
          .nav-links { 
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(var(--rgb-ink), 0.98);
            flex-direction: column; 
            justify-content: center;
            gap: 32px !important; 
            margin-top: 0 !important;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .nav-links.open {
            opacity: 1;
            pointer-events: auto;
          }
          .nav-links a {
            font-size: 24px !important;
            color: var(--cream) !important;
            font-family: var(--fd) !important;
            text-transform: none !important;
            letter-spacing: normal !important;
          }
          .nav-links a:hover {
            color: var(--gold) !important;
          }
        }
        .nav-links a:hover { color: var(--ink) !important; }
      `}</style>
      </nav>
    </>
  );
}
