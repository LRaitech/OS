import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Rss, Menu, X } from 'lucide-react';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-contact">
      <style>{`
        .page-contact {
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--fb);
        }
        
        
        /* NAV */
        nav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 48px;
          background: rgba(var(--rgb-cream),0.94); backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.10);
        }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-wordmark { font-family: var(--fd); font-size: 20px; font-weight: 600; color: var(--gold); letter-spacing: .08em; text-transform: uppercase; }
        .nav-links { display: flex; align-items: center; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .nav-links a { font-size: 11px; font-weight: 400; color: var(--warm-grey); text-decoration: none; letter-spacing: .08em; text-transform: uppercase; transition: color .15s; }
        .nav-links a:hover { color: var(--ink); }

        .contact-container { max-width: 1100px; margin: 0 auto; padding: 100px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        
        .contact-header { margin-bottom: 48px; }
        .contact-kicker { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); margin-bottom: 16px; }
        .contact-header h1 { font-family: var(--fd); font-size: 48px; font-weight: 300; color: var(--ink); line-height: 1.1; margin-bottom: 24px; }
        .contact-header p { font-size: 18px; color: var(--warm-grey); font-weight: 300; line-height: 1.6; max-width: 400px; }
        
        .contact-info { display: flex; flex-direction: column; gap: 32px; }
        .info-block { display: flex; flex-direction: column; gap: 8px; }
        .info-label { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); }
        .info-value { font-size: 16px; color: var(--ink); font-weight: 300; }
        
        .social-links { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .social-link { color: var(--ink); transition: color .2s; display: flex; align-items: center; gap: 8px; text-decoration: none; font-size: 14px; }
        .social-link:hover { color: var(--gold); }
        
        .contact-form { display: flex; flex-direction: column; gap: 32px; background: var(--parchment); padding: 48px; border: 1px solid rgba(var(--rgb-warm-grey2),0.1); }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-label { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); }
        .form-input, .form-select, .form-textarea { width: 100%; padding: 14px 0; background: transparent; border: none; border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.2); color: var(--ink); font-family: var(--fb); font-size: 16px; outline: none; transition: border-color .2s; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--gold); }
        .form-textarea { min-height: 100px; resize: vertical; }
        .submit-btn { display: inline-block; padding: 16px 40px; background: var(--gold); border: none; color: var(--cream); font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; cursor: pointer; transition: background .2s; width: 100%; margin-top: 16px; }
        .submit-btn:hover { background: var(--gold-light); }

        /* FOOTER */
        footer { position: relative; z-index: 1; padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 48px; align-items: start; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.10); margin-top: 64px; }
        .footer-tagline { font-family: var(--fd); font-size: 16px; font-weight: 300; font-style: italic; color: var(--warm-grey); line-height: 1.5; margin-top: 10px; }
        .footer-col-label { font-family: var(--fm); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: rgba(var(--rgb-warm-grey),0.55); margin-bottom: 14px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; padding: 0; margin: 0; }
        .footer-links a { font-size: 13px; font-weight: 300; color: var(--warm-grey); text-decoration: none; transition: color .15s; }
        .footer-links a:hover { color: var(--ink); }
        .footer-cta { text-align: right; }
        .footer-cta-text { font-family: var(--fd); font-size: 22px; font-weight: 300; color: var(--warm-grey); margin-bottom: 14px; line-height: 1.2; }
        .footer-cta-text em { color: var(--gold); font-style: italic; }
        .footer-copy { grid-column: 1/-1; padding-top: 28px; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.07); display: flex; justify-content: space-between; align-items: center; }
        .footer-copy-text { font-family: var(--fm); font-size: 10px; color: var(--warm-grey); letter-spacing: .06em; }
        .btn-nav { padding: 8px 22px; background: transparent; border: 1px solid var(--gold); color: var(--gold); font-family: var(--fb); font-size: 10px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; transition: all .2s; }
        .btn-nav:hover { background: var(--gold); color: var(--cream); }

        @media (max-width: 1024px) {
          nav { padding: 12px 20px; flex-direction: column; align-items: flex-start; }
          .mobile-menu-btn { display: block !important; }
          .nav-links { display: none !important; width: 100%; flex-direction: column; gap: 16px; margin-top: 16px; }
          .nav-links.open { display: flex !important; }
          .contact-container { grid-template-columns: 1fr; padding: 56px 20px; gap: 48px; }
          .contact-form { padding: 32px 24px; }
          footer { padding: 40px 20px; grid-template-columns: 1fr 1fr; }
          .footer-cta { text-align: left; }
        }
      `}</style>
      
      

      <div className="contact-container">
        <div>
          <div className="contact-header">
            <div className="contact-kicker">Connect</div>
            <h1>Let's talk.</h1>
            <p>Whether you're applying to the Dojo, exploring a Room, or ready to book a strategy engagement - reach us directly.</p>
          </div>
          
          <div className="contact-info">
            <div className="contact-kicker" style={{ marginBottom: '0' }}>Direct lines</div>
            
            <div className="info-block">
              <div className="info-label">Email</div>
              <div className="info-value">hello@lotusroom.studio</div>
            </div>
            
            <div className="info-block">
              <div className="info-label">Location</div>
              <div className="info-value">Nairobi, Kenya</div>
            </div>
            
            <div className="info-block">
              <div className="info-label">Website</div>
              <div className="info-value">lotusroom.studio</div>
            </div>
            
            <div className="info-block">
              <div className="info-label" style={{ marginBottom: '8px' }}>Social</div>
              <div className="social-links">
                <a href="https://instagram.com/lotusroom.studio" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                  <span>@lotusroom.studio</span>
                </a>
                <a href="https://linkedin.com/company/lotus-room-africa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                  <span>Lotus Room Africa</span>
                </a>
                <a href="https://lotusroom.substack.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Substack">
                  <Rss size={20} />
                  <span>Lotus Room OS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="contact-form" action="mailto:hello@lotusroom.studio" method="POST" encType="text/plain">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" name="Name" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="Email" className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">I want to</label>
              <select name="Intent" className="form-select" defaultValue="" required>
                <option value="" disabled>Select</option>
                <option value="Apply to the Dojo">Apply to the Dojo</option>
                <option value="Explore a Room">Explore a Room</option>
                <option value="Book a strategy engagement">Book a strategy engagement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="Message" className="form-textarea" placeholder="Tell us what you're building..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send →</button>
          </form>
        </div>
      </div>

      <footer>
        <div>
          <Link to="/" className="nav-logo" style={{marginBottom: "12px", textDecoration: 'none'}}>
            <span className="nav-wordmark" style={{ fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', color: 'var(--gold)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em' }}>LOTUS ROOM</span>
          </Link>
          <p className="footer-tagline">Where ventures<br />take root.</p>
        </div>
        <div>
          <div className="footer-col-label">AI Frameworks</div>
          <ul className="footer-links">
            <li><Link to="/art-of-brand">Art of Brand</Link></li>
            <li><Link to="/campfyer">Campfyer</Link></li>
            <li><a href="https://paystack.com/pay/full-bundle-250" target="_blank">Full Dojo System</a></li>
            <li><Link to="/rooms">All rooms</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-label">Apply Now</div>
          <ul className="footer-links">
            <li><Link to="/apply">Foundation</Link></li>
            <li><Link to="/apply">Venture Build</Link></li>
            <li><Link to="/apply">Develop</Link></li>
            <li><Link to="/apply">Studio Partnership</Link></li>
            <li><Link to="/apply">hello@lotusroom.studio</Link></li>
          </ul>
        </div>
        <div className="footer-cta">
          <div className="footer-cta-text">Enter the<br /><em>Dojo.</em></div>
          <Link to="/dojo" className="btn-nav">Enter Dojo →</Link>
        </div>
        <div className="footer-copy">
          <span className="footer-copy-text">© 2026 Lotus Room Studio · Nairobi · @lotusroom.studio</span>
          <span className="footer-copy-text">Culture by Design</span>
        </div>
      </footer>
    </div>
  );
}
