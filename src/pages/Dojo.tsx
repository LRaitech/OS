import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

export default function Dojo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="page-dojo">
      <style>{`
        .page-dojo { min-height: 100vh; background: var(--cream); color: var(--ink); font-family: var(--fb); }
        
        /* HERO */
        .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 160px 48px 120px; overflow: hidden; background: var(--cream); color: var(--ink); text-align: center; perspective: 1000px; }
        .hero h1 { font-family: var(--fd); font-size: clamp(64px,10vw,120px); font-weight: 500; line-height: .93; letter-spacing: -.02em; color: var(--ink); margin-bottom: 32px; }
        .hero-sub { font-size: 20px; font-weight: 400; line-height: 1.65; color: var(--ink-soft); max-width: 800px; margin: 0 auto 32px; }
        .hero-meta { font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); margin-bottom: 48px; font-weight: 600; }
        .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        
        /* CONTENT */
        .dojo-section { padding: 0; width: 100%; }
        
        .stage-row { 
          display: grid; grid-template-columns: 1fr 2fr; gap: 80px; 
          padding: 120px 48px; 
          min-height: 100vh;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
          perspective: 1000px;
        }
        .stage-meta h3 { font-family: var(--fd); font-size: 40px; font-weight: 500; color: var(--ink); margin-bottom: 8px; }
        .stage-subtitle { font-family: var(--fm); font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold); margin-bottom: 24px; font-weight: 600; }
        .stage-tagline { font-size: 16px; color: var(--ink); font-style: italic; margin-top: 40px; padding-top: 32px; border-top: 1px solid rgba(var(--rgb-ink), 0.05); font-weight: 400; }
        
        .stage-content p { font-size: 18px; font-weight: 400; color: var(--ink-soft); line-height: 1.7; margin-bottom: 24px; max-width: 800px; }
        .stage-content p:last-child { margin-bottom: 0; }
        
        .stage-list { list-style: none; padding: 0; margin: 32px 0 0 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .stage-list li { font-size: 14px; color: var(--ink); display: flex; align-items: center; gap: 12px; }
        .stage-list li::before { content: ''; display: block; width: 4px; height: 4px; background: var(--gold); border-radius: 50%; }

        .cta-section { position: relative; text-align: center; padding: 160px 48px; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
        .cta-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 600px; margin: 0 auto; position: relative; zIndex: 1; }
        .cta-card { padding: 80px 48px; background: transparent; text-align: center; }
        .cta-card p { font-size: 18px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 40px; font-weight: 400; }
        .cta-card h3 { font-weight: 500 !important; }

        @media(max-width:1024px){
          .hero{padding:120px 20px 64px; min-height: auto;}
          .hero h1 { font-size: clamp(48px, 12vw, 80px); }
          .dojo-section { padding: 60px 20px; }
          .stage-row { grid-template-columns: 1fr; gap: 48px; padding: 64px 20px; min-height: auto; }
          .cta-section { padding: 100px 20px; min-height: auto; }
          .cta-grid { grid-template-columns: 1fr; }
          .cta-card { padding: 48px 24px; }
        }
      `}</style>

      {/* HERO */}
      <header className="hero" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', inset: 0, y: y1, scale, opacity, zIndex: 0 }}
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="dojoG1" cx="50%" cy="0%" r="70%"><stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.15"/><stop offset="100%" stopColor="transparent"/></radialGradient>
            </defs>
            <rect width="1440" height="900" fill="var(--cream)"/>
            <rect width="1440" height="900" fill="url(#dojoG1)"/>
            <g opacity="0.05" stroke="var(--ink)" fill="none">
              <circle cx="720" cy="450" r="300" strokeWidth="1"/>
              <circle cx="720" cy="450" r="450" strokeWidth="0.5"/>
              <circle cx="720" cy="450" r="600" strokeWidth="0.25"/>
            </g>
          </svg>
        </motion.div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>The <em>Dojo.</em></h1>
          </motion.div>
          
          <motion.p 
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            The Dojo is a 12 week programme where founders work directly with a strategist and team to build their business step by step. This is not a course and it is not theory. Every part of the process is applied to your actual venture in real time.
          </motion.p>
          
          <motion.p 
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            You are not watching or learning passively. You are making decisions, building assets, and putting structure into place with guidance. By the end of the programme, your business is defined, visible, and operational.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-meta">Hybrid format. Online and Nairobi studio.</p>
            <div className="hero-ctas">
              <Link to="/apply" className="btn-primary">Apply to the Dojo</Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* STAGES */}
      <section id="stages" className="dojo-section">
        
        <FadeIn className="stage-row" style={{ borderTop: 'none' }}>
          <div className="stage-meta">
            <h3>The <em>Foundation.</em></h3>
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
            <h3>The <em>Build.</em></h3>
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
            <h3>The <em>Develop.</em></h3>
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
            <h3>The <em>Capital.</em></h3>
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
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="dojoG2" cx="50%" cy="100%" r="70%"><stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.15"/><stop offset="100%" stopColor="transparent"/></radialGradient>
            </defs>
            <rect width="1440" height="900" fill="var(--cream)"/>
            <rect width="1440" height="900" fill="url(#dojoG2)"/>
          </svg>
        </div>
        <FadeIn className="cta-grid">
          <div className="cta-card">
            <h3 style={{fontFamily: 'var(--fd)', fontSize: '48px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px'}}>Apply to the <em>Dojo.</em></h3>
            <p>Join the cohort and build your business with direct support over 12 weeks.</p>
            <Link to="/apply" className="btn-primary" style={{ fontSize: '14px', padding: '16px 40px' }}>Apply to the Dojo</Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
