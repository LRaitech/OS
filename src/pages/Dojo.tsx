import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Dojo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-dojo">
      <style>{`
        .page-dojo { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
        
        /* HERO */
        .hero { position: relative; min-height: 60vh; display: flex; flex-direction: column; justify-content: center; padding: 120px 48px 80px; overflow: hidden; background: var(--cream); color: var(--ink); text-align: center; }
        .hero h1 { font-family: var(--fd); font-size: clamp(48px,8vw,80px); font-weight: 300; line-height: .93; letter-spacing: -.02em; color: var(--ink); margin-bottom: 24px; }
        .hero-sub { font-size: 18px; font-weight: 300; line-height: 1.65; color: var(--warm-grey); max-width: 720px; margin: 0 auto 24px; }
        .hero-meta { font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--gold-light); margin-bottom: 40px; font-weight: 500; }
        .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        
        .btn-primary { padding: 16px 40px; background: var(--gold); border: 1px solid var(--gold); color: var(--cream); font-family: var(--fb); font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; transition: all .2s; display: inline-block; }
        .btn-primary:hover { background: var(--gold-light); border-color: var(--gold-light); }
        .btn-secondary { padding: 16px 40px; background: transparent; border: 1px solid rgba(var(--rgb-ink),0.3); color: var(--ink); font-family: var(--fb); font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; transition: all .2s; display: inline-block; }
        .btn-secondary:hover { border-color: var(--ink); }

        /* CONTENT */
        .dojo-section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }
        
        .stage-row { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; padding: 64px 0; border-top: 1px solid rgba(var(--rgb-ink), 0.1); }
        .stage-meta h3 { font-family: var(--fd); font-size: 32px; font-weight: 300; color: var(--ink); margin-bottom: 4px; }
        .stage-subtitle { font-family: var(--fm); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 24px; }
        .stage-tagline { font-size: 14px; color: var(--ink); font-style: italic; margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(var(--rgb-ink), 0.05); }
        
        .stage-content p { font-size: 16px; font-weight: 300; color: var(--warm-grey2); line-height: 1.7; margin-bottom: 24px; }
        .stage-content p:last-child { margin-bottom: 0; }
        
        .stage-list { list-style: none; padding: 0; margin: 32px 0 0 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .stage-list li { font-size: 14px; color: var(--ink); display: flex; align-items: center; gap: 12px; }
        .stage-list li::before { content: ''; display: block; width: 4px; height: 4px; background: var(--gold); border-radius: 50%; }

        .cta-section { text-align: center; padding: 80px 48px 120px; }
        .cta-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 400px; margin: 0 auto; }
        .cta-card { padding: 48px 32px; background: var(--parchment); border: 1px solid rgba(var(--rgb-ink), 0.05); text-align: center; }
        .cta-card p { font-size: 14px; color: var(--warm-grey); line-height: 1.6; margin-bottom: 24px; }

        @media(max-width:1024px){
          .hero{padding:100px 20px 64px;}
          .dojo-section { padding: 60px 20px; }
          .stage-row { grid-template-columns: 1fr; gap: 32px; padding: 48px 0; }
          .cta-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <header className="hero">
        <FadeIn className="hero-content">
          <h1>The Dojo</h1>
          <p className="hero-sub">The Dojo is a 12 week programme where founders work directly with a strategist and team to build their business step by step. This is not a course and it is not theory. Every part of the process is applied to your actual venture in real time.</p>
          <p className="hero-sub">You are not watching or learning passively. You are making decisions, building assets, and putting structure into place with guidance. By the end of the programme, your business is defined, visible, and operational.</p>
          <p className="hero-meta">Hybrid format. Online and Nairobi studio. Maximum 8 founders per cohort.</p>
          <div className="hero-ctas">
            <Link to="/apply" className="btn-primary">Apply to the Dojo</Link>
          </div>
        </FadeIn>
      </header>

      {/* STAGES */}
      <section id="stages" className="dojo-section">
        
        <FadeIn className="stage-row">
          <div className="stage-meta">
            <h3>Foundation</h3>
            <div className="stage-subtitle">Clarity</div>
            <div className="stage-tagline">Define idea, audience, cultural position</div>
          </div>
          <div className="stage-content">
            <p>The first stage is about defining what you are building and making sure it is clear and grounded.</p>
            <p>You will work on your core idea and shape it into something that can be understood and positioned. This includes identifying your audience, understanding the problem you are solving, and building the narrative that explains why your business matters.</p>
            <p>You will also establish the structure of your brand. This includes how you communicate, how you position yourself in the market, and how everything connects.</p>
            <p>By the end of this stage, you have a clear idea, a defined audience, and a strong foundation that supports everything that comes next.</p>
            <ul className="stage-list">
              <li>Early-stage clarity</li>
              <li>Narrative foundations</li>
              <li>Brand structure</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="stage-row">
          <div className="stage-meta">
            <h3>Build</h3>
            <div className="stage-subtitle">Presence</div>
            <div className="stage-tagline">Turn vision into public presence</div>
          </div>
          <div className="stage-content">
            <p>The second stage focuses on making your business visible.</p>
            <p>You will create content, campaigns, and storytelling systems that allow your business to reach people consistently. This is where your idea moves from something internal to something public.</p>
            <p>You will work on how your message shows up, how your content is structured, and how you attract and engage your audience.</p>
            <p>By the end of this stage, your business has an active presence. Content is being created, campaigns are running, and people can see and understand what you are building.</p>
            <ul className="stage-list">
              <li>Content creation</li>
              <li>Campaign execution</li>
              <li>Storytelling systems</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="stage-row">
          <div className="stage-meta">
            <h3>Develop</h3>
            <div className="stage-subtitle">Structure</div>
            <div className="stage-tagline">Workflows for growth</div>
          </div>
          <div className="stage-content">
            <p>The third stage is about building the internal systems that allow your business to function.</p>
            <p>You will define workflows, organise operations, and put systems in place that support consistency and growth. This includes how work gets done, how decisions are made, and how your business runs on a daily basis.</p>
            <p>This is where you move from activity to structure. Instead of reacting, your business starts to operate with clarity and direction.</p>
            <p>By the end of this stage, your business is organised, your processes are clear, and your operations can support growth.</p>
            <ul className="stage-list">
              <li>Scale operations</li>
              <li>Align teams</li>
              <li>Refine internal systems</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="stage-row">
          <div className="stage-meta">
            <h3>Capital</h3>
            <div className="stage-subtitle">Expansion</div>
            <div className="stage-tagline">Investor positioning</div>
          </div>
          <div className="stage-content">
            <p>The final stage prepares your business for growth beyond the early phase.</p>
            <p>You will work on how your business is positioned for partnerships, funding, and expansion. This includes refining your strategy, strengthening your numbers, and making sure your business can be understood by external stakeholders.</p>
            <p>You will also define how the business grows from where it is to where it needs to go.</p>
            <p>By the end of this stage, your business is ready to present, grow, and attract opportunities.</p>
            <ul className="stage-list">
              <li>Venture-ready strategies</li>
              <li>Funding preparation</li>
              <li>Growth acceleration</li>
            </ul>
          </div>
        </FadeIn>

      </section>

      <div className="cta-section">
        <FadeIn className="cta-grid">
          <div className="cta-card">
            <h3 style={{fontFamily: 'var(--fd)', fontSize: '24px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px'}}>Apply to the Dojo</h3>
            <p>Join the cohort and build your business with direct support over 12 weeks.</p>
            <Link to="/apply" className="btn-primary">Apply to the Dojo</Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
