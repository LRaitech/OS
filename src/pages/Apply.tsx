import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Apply() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-apply">
      <style>{`
        
        .page-apply { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
        .apply-container { max-width: 800px; margin: 0 auto; padding: 100px 40px; }
        .apply-header { margin-bottom: 48px; }
        .apply-header h1 { font-family: var(--fd); font-size: 48px; font-weight: 300; color: var(--ink); line-height: 1.1; margin-bottom: 16px; }
        .apply-header p { font-size: 16px; color: var(--warm-grey); font-weight: 300; line-height: 1.6; }
        .apply-form { display: flex; flex-direction: column; gap: 40px; }
        .form-section { border-top: 1px solid rgba(var(--rgb-warm-grey2),0.1); padding-top: 32px; }
        .form-section-title { font-family: var(--fd); font-size: 24px; color: var(--gold); margin-bottom: 24px; font-weight: 300; }
        .form-group { margin-bottom: 24px; }
        .form-label { display: block; font-family: var(--fm); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--warm-grey); margin-bottom: 8px; }
        .form-input, .form-select, .form-textarea { width: 100%; padding: 14px 16px; background: transparent; border: 1px solid rgba(var(--rgb-warm-grey2),0.2); color: var(--ink); font-family: var(--fb); font-size: 15px; outline: none; transition: border-color .2s; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--gold); }
        .form-textarea { min-height: 120px; resize: vertical; }
        .radio-group, .checkbox-group { display: flex; flex-direction: column; gap: 12px; }
        .radio-label, .checkbox-label { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--ink); cursor: pointer; }
        .radio-label input, .checkbox-label input { accent-color: var(--gold); width: 16px; height: 16px; }
        .submit-btn { display: inline-block; padding: 16px 40px; background: var(--gold); border: none; color: var(--cream); font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; cursor: pointer; transition: background .2s; }
        .submit-btn:hover { background: var(--gold-light); }
        
        /* Nav styles */
        nav { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 14px 40px; background: rgba(var(--rgb-cream),0.94); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(var(--rgb-warm-grey2),0.10); }
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-mark { width: 28px; height: 28px; }
        .nav-wordmark { font-family: var(--fd); font-size: 18px; font-weight: 300; color: var(--ink); letter-spacing: .04em; }
        .nav-links { display: flex; align-items: center; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .nav-links a { font-size: 11px; font-weight: 400; color: var(--warm-grey); text-decoration: none; letter-spacing: .08em; text-transform: uppercase; transition: color .15s; }
        .nav-links a:hover { color: var(--ink); }

        @media (max-width: 1024px) {
          nav { padding: 12px 20px; flex-direction: column; align-items: flex-start; }
          .mobile-menu-btn { display: block !important; }
          .nav-links { display: none !important; width: 100%; flex-direction: column; gap: 16px; margin-top: 16px; }
          .nav-links.open { display: flex !important; }
          .apply-container { padding: 56px 20px; }
        }
        @media (max-width: 900px) {
          /* Removed .nav-links { display: none !important; } */
        }
        @media (max-width: 680px) {
          .nav-wordmark { display: none; }
        }
      `}</style>
      


      <div className="apply-container">
        <div className="apply-header">
          <h1>Application</h1>
          <p>Tell us about your venture. We'll review your details and get back to you to schedule a conversation.</p>
        </div>

        <form className="apply-form" action="mailto:Lotusroom.os@gmail.com" method="POST" encType="text/plain">
          
          <div className="form-section">
            <h2 className="form-section-title">Essential Info</h2>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="Full Name" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="Email Address" className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Room Selection</label>
              <select name="Room Selection" className="form-select" required>
                <option value="">Select a room...</option>
                <option value="Art of Brand">Art of Brand</option>
                <option value="Campfyer">Campfyer</option>
                <option value="EVO">EVO</option>
                <option value="Beat Therapy">Beat Therapy</option>
                <option value="Deeper">Deeper</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Stage Selection</label>
              <select name="Stage Selection" className="form-select" required>
                <option value="">Select a stage...</option>
                <option value="Foundation">Foundation</option>
                <option value="Build">Build</option>
                <option value="Develop">Develop</option>
                <option value="Capital">Capital</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Company / Project Context</h2>
            <div className="form-group">
              <label className="form-label">Company / Project Name</label>
              <input type="text" name="Project Name" className="form-input" placeholder="Project Title" required />
            </div>
            <div className="form-group">
              <label className="form-label">Type of Entity</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="Entity Type" value="Emerging Startup" required /> Emerging Startup</label>
                <label className="radio-label"><input type="radio" name="Entity Type" value="Creator" /> Creator</label>
                <label className="radio-label"><input type="radio" name="Entity Type" value="Studio" /> Studio</label>
                <label className="radio-label"><input type="radio" name="Entity Type" value="NGO" /> NGO</label>
                <label className="radio-label"><input type="radio" name="Entity Type" value="Digital Product Company" /> Digital Product Company</label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Team Size / Company Stage</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="Company Stage" value="Solo" required /> Solo</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="2-5" /> 2-5</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="6-10" /> 6-10</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="10+" /> 10+</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="Idea" /> Idea</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="Pre-Revenue" /> Pre-Revenue</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="Seed" /> Seed</label>
                <label className="radio-label"><input type="radio" name="Company Stage" value="Growth" /> Growth</label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Presence & Links</h2>
            <div className="form-group">
              <label className="form-label">Website & Social Links</label>
              <textarea name="Links" className="form-textarea" placeholder="Paste links here (Website, LinkedIn, Instagram, TikTok)..."></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Optional Media Upload (PDF, Deck, Portfolio)</label>
              <input type="file" name="Media Upload" className="form-input" style={{padding: "10px 16px"}} />
              <div style={{fontSize: "12px", color: "var(--warm-grey)", marginTop: "8px"}}>Note: Files selected here will not be attached automatically via email client. Please attach them manually in your email client before sending.</div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Goals & Challenges</h2>
            <div className="form-group">
              <label className="form-label">Main Goal</label>
              <textarea name="Main Goal" className="form-textarea" placeholder="What are you aiming to achieve?" required></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Biggest Challenge</label>
              <textarea name="Biggest Challenge" className="form-textarea" placeholder="What is holding you back?" required></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Focus Areas</label>
              <div className="checkbox-group">
                <label className="checkbox-label"><input type="checkbox" name="Focus Area: Content" value="Yes" /> Content</label>
                <label className="checkbox-label"><input type="checkbox" name="Focus Area: Operations" value="Yes" /> Operations</label>
                <label className="checkbox-label"><input type="checkbox" name="Focus Area: Funding" value="Yes" /> Funding</label>
                <label className="checkbox-label"><input type="checkbox" name="Focus Area: Audience Growth" value="Yes" /> Audience Growth</label>
                <label className="checkbox-label"><input type="checkbox" name="Focus Area: Team Alignment" value="Yes" /> Team Alignment</label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Meeting Preferences</h2>
            <div className="form-group">
              <label className="form-label">Preferred Meeting Type</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="Meeting Type" value="Online" required /> Online</label>
                <label className="radio-label"><input type="radio" name="Meeting Type" value="In-Person" /> In-Person</label>
                <label className="radio-label"><input type="radio" name="Meeting Type" value="Hybrid" /> Hybrid</label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Available Time Slots</label>
              <input type="date" name="Available Time Slots" className="form-input" />
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Additional Notes</h2>
            <div className="form-group">
              <textarea name="Additional Notes" className="form-textarea" placeholder="Any other context..."></textarea>
            </div>
          </div>

          <div className="form-section" style={{borderTop: "none", paddingTop: "0"}}>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" name="Consent" value="Agreed" required /> 
                I agree to receive follow-up emails and updates regarding my application.
              </label>
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
          </div>

        </form>
      </div>
    </div>
  );
}
