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
        
        
        .contact-container { max-width: 800px; margin: 0 auto; padding: 160px 48px; display: flex; flex-direction: column; gap: 80px; align-items: center; text-align: center; }
        
        .contact-header { margin-bottom: 0; }
        .contact-kicker { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); margin-bottom: 24px; }
        .contact-header h1 { font-family: var(--fd); font-size: clamp(48px, 8vw, 80px); font-weight: 300; color: var(--ink); line-height: 1.1; margin-bottom: 32px; letter-spacing: -0.02em; }
        .contact-header p { font-size: 20px; color: var(--warm-grey); font-weight: 300; line-height: 1.6; max-width: 600px; margin: 0 auto; }
        
        .contact-info { display: flex; flex-direction: row; gap: 64px; justify-content: center; width: 100%; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.1); padding-top: 64px; }
        .info-block { display: flex; flex-direction: column; gap: 12px; align-items: center; }
        .info-label { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); }
        .info-value { font-size: 18px; color: var(--ink); font-weight: 300; }
        
        .social-links { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; justify-content: center; }
        .social-link { color: var(--ink); transition: color .2s; display: flex; align-items: center; gap: 12px; text-decoration: none; font-size: 16px; }
        .social-link:hover { color: var(--gold); }
        
        .contact-form { display: flex; flex-direction: column; gap: 40px; background: transparent; padding: 0; border: none; width: 100%; max-width: 600px; margin: 0 auto; text-align: left; }
        .form-group { display: flex; flex-direction: column; gap: 12px; }
        .form-label { font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); }
        .form-input, .form-select, .form-textarea { width: 100%; padding: 16px 0; background: transparent; border: none; border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.2); color: var(--ink); font-family: var(--fb); font-size: 18px; outline: none; transition: border-color .2s; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--gold); }
        .form-textarea { min-height: 120px; resize: vertical; }
        .submit-btn { display: inline-block; padding: 20px 48px; background: var(--gold); border: none; color: var(--cream); font-family: var(--fb); font-size: 13px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; cursor: pointer; transition: background .2s; width: 100%; margin-top: 24px; border-radius: 30px; }
        .submit-btn:hover { background: var(--gold-light); }

        /* FOOTER */
        .old-footer { position: relative; z-index: 1; padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 48px; align-items: start; border-top: 1px solid rgba(var(--rgb-warm-grey2),0.10); margin-top: 64px; }
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

        @media (max-width: 1024px) {
          .contact-container { padding: 120px 20px; gap: 64px; }
          .contact-info { flex-direction: column; gap: 48px; }
          .old-footer { padding: 40px 20px; grid-template-columns: 1fr 1fr; }
          .footer-cta { text-align: left; }
        }
      `}</style>
      
      

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-kicker">Connect</div>
          <h1>Let's <em>talk.</em></h1>
          <p>Whether you're applying to the Dojo, exploring a Room, or ready to book a strategy engagement - reach us directly.</p>
        </div>
        
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3a394c62-735c-4916-b733-211113cdbb57" />
          <input type="hidden" name="subject" value="New Lotus Room Inquiry" />
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-input" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" placeholder="Tell us what you're building..." required></textarea>
          </div>
          <button type="submit" className="submit-btn btn-primary">Send →</button>
        </form>

        <div className="contact-info">
          <div className="info-block">
            <div className="info-label">Location</div>
            <div className="info-value">Nairobi, Kenya</div>
          </div>
          
          <div className="info-block">
            <div className="info-label" style={{ marginBottom: '8px' }}>Social</div>
            <div className="social-links">
              <a href="https://instagram.com/lotusroom.studio" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/company/lotus-room-africa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://lotusroom.substack.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Substack">
                <Rss size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
