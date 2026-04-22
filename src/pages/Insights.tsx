import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

export default function Insights() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch RSS feed using rss2json API
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Flotusroomos.substack.com%2Ffeed')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          setArticles(data.items.slice(0, 10));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Substack feed:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-insights">
      <style>{`
        .page-insights {
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--fb);
        }
        .insights-hero {
          padding: 120px 48px 80px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
          text-align: center;
        }
        .ih-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .eyebrow {
          font-family: var(--fm);
          font-size: 9px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(var(--rgb-gold), 0.28);
          padding: 5px 12px;
          display: inline-block;
          margin-bottom: 24px;
        }
        h1 {
          font-family: var(--fd);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 300;
          line-height: .95;
          letter-spacing: -.02em;
          color: var(--ink);
          margin-bottom: 24px;
        }
        h1 em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-sub {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--warm-grey);
          margin-bottom: 32px;
        }
        .newsletter-form {
          display: flex;
          gap: 12px;
          justify-content: center;
          max-width: 400px;
          margin: 0 auto;
        }
        .newsletter-btn {
          padding: 14px 32px;
          background: var(--ink);
          color: var(--cream);
          border: 1px solid var(--ink);
          font-family: var(--fb);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .14em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all .2s;
        }
        .newsletter-btn:hover {
          background: transparent;
          color: var(--ink);
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 40px;
          padding: 80px 48px;
          max-width: 1440px;
          margin: 0 auto;
        }
        
        .section-title {
          grid-column: span 12;
          font-family: var(--fd);
          font-size: 32px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
        }
        
        .article-card {
          display: flex;
          flex-direction: column;
        }
        
        .article-card.featured {
          grid-column: span 12;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
        }
        
        .article-card.standard {
          grid-column: span 4;
          margin-bottom: 40px;
        }
        
        .image-container {
          width: 100%;
          height: 300px;
          margin-bottom: 24px;
          background: rgba(var(--rgb-ink), 0.04);
        }
        
        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .article-card.featured .image-container {
          height: 600px;
          margin-bottom: 0;
        }
        
        .article-date {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--warm-grey);
          margin-bottom: 16px;
        }
        
        .article-title {
          font-family: var(--fd);
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        
        .article-card.featured .article-title {
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.05;
          margin-bottom: 24px;
        }
        
        .article-desc {
          font-size: 15px;
          font-weight: 300;
          color: var(--warm-grey2);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .article-card.featured .article-desc {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .article-link {
          font-family: var(--fb);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(var(--rgb-gold), 0.3);
          padding-bottom: 2px;
        }
        
        .product-card {
          padding: 32px;
          border: 1px solid rgba(var(--rgb-ink), 0.08);
          background: var(--parchment);
          margin-bottom: 24px;
          transition: border-color .2s;
        }
        .product-card:hover {
          border-color: rgba(var(--rgb-gold), 0.4);
        }
        .product-name {
          font-family: var(--fd);
          font-size: 22px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .product-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--warm-grey);
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .product-price {
          font-family: var(--fm);
          font-size: 12px;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .product-link {
          display: inline-block;
          padding: 10px 20px;
          border: 1px solid rgba(var(--rgb-ink), 0.2);
          color: var(--ink);
          font-family: var(--fb);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all .2s;
        }
        .product-link:hover {
          background: var(--ink);
          color: var(--cream);
          border-color: var(--ink);
        }
        
        .old-footer {
          padding: 56px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr auto;
          gap: 48px;
          align-items: start;
          border-top: 1px solid rgba(var(--rgb-warm-grey2), 0.10);
        }
        .footer-tagline {
          font-family: var(--fd);
          font-size: 16px;
          font-weight: 300;
          font-style: italic;
          color: var(--warm-grey);
          line-height: 1.5;
          margin-top: 10px;
        }
        .footer-col-label {
          font-family: var(--fm);
          font-size: 9px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(var(--rgb-warm-grey), 0.55);
          margin-bottom: 14px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .footer-links a {
          font-size: 13px;
          font-weight: 300;
          color: var(--warm-grey);
          text-decoration: none;
          transition: color .15s;
        }
        .footer-links a:hover {
          color: var(--ink);
        }
        .footer-cta {
          text-align: right;
        }
        .footer-cta-text {
          font-family: var(--fd);
          font-size: 22px;
          font-weight: 300;
          color: var(--warm-grey);
          margin-bottom: 14px;
          line-height: 1.2;
        }
        .footer-cta-text em {
          color: var(--gold);
          font-style: italic;
        }
        .footer-copy {
          grid-column: 1 / -1;
          padding-top: 28px;
          border-top: 1px solid rgba(var(--rgb-warm-grey2), 0.07);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy-text {
          font-family: var(--fm);
          font-size: 10px;
          color: var(--warm-grey);
          letter-spacing: .06em;
        }
        
        @media(max-width: 1024px) {
          .insights-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 56px 20px;
          }
          .article-card.featured {
            grid-column: span 1;
            grid-template-columns: 1fr;
            gap: 32px;
            padding-bottom: 40px;
          }
          .article-card.featured .image-container {
            height: 400px;
          }
          .article-card.standard {
            grid-column: span 1;
          }
          .section-title {
            grid-column: span 1;
          }
          .insights-hero {
            padding: 56px 20px;
          }
          .old-footer {
            padding: 40px 20px;
            grid-template-columns: 1fr 1fr;
          }
          .footer-cta {
            text-align: left;
          }
        }
      `}</style>

      <header className="insights-hero" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', inset: 0, y: y1, scale, opacity, zIndex: 0 }}
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="insightsG1" cx="20%" cy="20%" r="60%"><stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.12"/><stop offset="100%" stopColor="transparent"/></radialGradient>
              <radialGradient id="insightsG2" cx="80%" cy="80%" r="60%"><stop offset="0%" stopColor="var(--warm-grey)" stopOpacity="0.08"/><stop offset="100%" stopColor="transparent"/></radialGradient>
            </defs>
            <rect width="1440" height="900" fill="var(--cream)"/>
            <rect width="1440" height="900" fill="url(#insightsG1)"/>
            <rect width="1440" height="900" fill="url(#insightsG2)"/>
            <g opacity="0.03" stroke="var(--ink)" fill="none">
              <line x1="0" y1="300" x2="1440" y2="300" strokeWidth="0.5"/>
              <line x1="0" y1="600" x2="1440" y2="600" strokeWidth="0.5"/>
              <line x1="480" y1="0" x2="480" y2="900" strokeWidth="0.5"/>
              <line x1="960" y1="0" x2="960" y2="900" strokeWidth="0.5"/>
            </g>
          </svg>
        </motion.div>

        <div className="ih-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="artifact-svg" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '900px', opacity: 0.07, zIndex: -1 }}>
            <svg viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="0.2">
              <path d="M0 55 Q20 50 40 55 T80 52 T120 55 T160 50 T200 55" strokeDasharray="1 1"/>
              <path d="M30 55 L35 40 L40 55 M32 48 L38 48" opacity="0.8"/>
              <path d="M110 52 L118 30 L126 52 M114 42 L122 42" opacity="0.8"/>
              <path d="M160 50 L163 43 L166 50" opacity="0.8"/>
              <circle cx="85" cy="50" r="0.5" fill="currentColor"/>
              <circle cx="88" cy="51" r="0.5" fill="currentColor"/>
              <circle cx="91" cy="50" r="0.5" fill="currentColor"/>
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">Insights & Systems</div>
            <h1>Cultural <em>Insights.</em></h1>
          </motion.div>
          
          <motion.p 
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Essays on brand strategy, AI frameworks, and building ventures that scale. Join the newsletter to get our latest systems directly in your inbox.
          </motion.p>
        </div>
      </header>

      <div className="insights-grid">
        <h2 className="section-title">Latest <em>Articles.</em></h2>
        
        {loading ? (
          <div style={{ gridColumn: 'span 12', padding: '40px 0', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '12px' }}>Loading articles...</div>
        ) : articles.length > 0 ? (
          articles.map((article, index) => {
            // Extract a clean description (removing HTML tags)
            const cleanDesc = article.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
            
            // Format date
            const date = new Date(article.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            // Extract image from description if thumbnail is empty
            let imageUrl = article.thumbnail;
            if (!imageUrl) {
              const imgMatch = article.description.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) imageUrl = imgMatch[1];
            }

            const isFeatured = index === 0;

            return (
              <motion.article 
                key={index} 
                className={`article-card ${isFeatured ? 'featured' : 'standard'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {imageUrl && (
                  <div className="image-container" style={{ overflow: 'hidden' }}>
                    <img src={imageUrl} alt={article.title} className="article-img cinematic-image" referrerPolicy="no-referrer" />
                  </div>
                )}
                <div className="article-content">
                  <div className="article-date">{date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-desc" dangerouslySetInnerHTML={{ __html: cleanDesc }}></p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">Read full article →</a>
                </div>
              </motion.article>
            );
          })
        ) : (
          <div style={{ gridColumn: 'span 12', padding: '40px 0', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '12px' }}>No articles found.</div>
        )}
      </div>

      <div className="newsletter-bottom" style={{ padding: '80px 48px', textAlign: 'center', borderTop: '1px solid rgba(var(--rgb-ink), 0.08)' }}>
        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '32px', marginBottom: '16px' }}>Join the <em>Newsletter.</em></h2>
        <p style={{ color: 'var(--warm-grey)', marginBottom: '32px' }}>Get our latest systems directly in your inbox.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe src="https://lotusroomos.substack.com/embed" width="480" height="150" style={{ border: '1px solid rgba(var(--rgb-ink), 0.1)', background: 'transparent', borderRadius: '4px' }} frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  );
}
