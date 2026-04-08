import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && document.documentElement.classList.contains('dark'))) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 48px',
      background: 'rgba(var(--rgb-cream), 0.94)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(var(--rgb-ink), 0.1)',
      transition: 'background 0.3s ease, border-color 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {!isHome && (
            <Link to="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', border: '1px solid rgba(var(--rgb-ink), 0.25)', padding: '4px 8px', color: 'var(--ink)', textDecoration: 'none', marginRight: '16px', letterSpacing: '0.05em' }}>[ ← Back ]</Link>
          )}
          <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
            <span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--ink)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
          </Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} style={{ display: isMenuOpen ? 'flex' : 'none', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Home</Link></li>
            <li><Link to="/rooms" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Rooms</Link></li>
            <li><Link to="/dojo" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Dojo</Link></li>
            <li><Link to="/insights" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Insights</Link></li>
            <li><Link to="/contact" style={{ fontSize: '11px', fontWeight: 400, color: 'var(--warm-grey)', textDecoration: 'none', letterSpacing: '.08em', textTransform: 'uppercase' }}>Contact</Link></li>
          </ul>

          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer', display: 'none' }}
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
          nav { padding: 14px 20px !important; flex-direction: column; align-items: flex-start; }
          .mobile-menu-btn { display: block !important; }
          .nav-links { width: 100%; flex-direction: column; gap: 16px; margin-top: 16px !important; }
        }
        .nav-links a:hover { color: var(--ink) !important; }
      `}</style>
    </nav>
  );
}
