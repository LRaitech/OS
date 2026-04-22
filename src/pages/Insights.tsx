import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  content?: string;
  enclosure?: {
    link: string;
    type: string;
  };
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
    // Using rss2json which handles Substack quite well. 
    // We add order_by and order_dir to ensure latest first.
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Flotusroomos.substack.com%2Ffeed&api_key=')
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
          margin-bottom: 48px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .section-title span {
          font-family: var(--fm);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--warm-grey);
        }
        
        .article-card {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .article-card.featured {
          grid-column: span 12;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          margin-bottom: 64px;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
        }
        
        .article-card.standard {
          grid-column: span 4;
          margin-bottom: 64px;
        }
        
        .image-container {
          width: 100%;
          height: 280px;
          margin-bottom: 32px;
          background: rgba(var(--rgb-ink), 0.04);
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(var(--rgb-ink), 0.05);
        }
        
        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .article-card:hover .article-img {
          transform: scale(1.05);
        }
        
        .article-card.featured .image-container {
          height: 600px;
          margin-bottom: 0;
        }
        
        .fallback-bg {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(var(--rgb-gold), 0.05), rgba(var(--rgb-ink), 0.05));
        }
        
        .article-date {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          opacity: 0.8;
        }
        
        .article-title {
          font-family: var(--fd);
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .article-card.featured .article-title {
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        
        .article-desc {
          font-size: 16px;
          font-weight: 300;
          color: var(--warm-grey);
          line-height: 1.7;
          margin-bottom: 32px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .article-card.featured .article-desc {
          font-size: 18px;
          line-height: 1.8;
          -webkit-line-clamp: 5;
        }
        
        .article-link {
          font-family: var(--fb);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s ease;
        }
        .article-link:hover {
          gap: 12px;
        }
        .article-link::after {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
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
            padding: 80px 20px 48px;
          }
        }
      `}</style>

      <header className="insights-hero" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', inset: 0, y: y1, scale, opacity, zIndex: 0 }}
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <rect width="1440" height="900" fill="var(--cream)"/>
            <g opacity="0.04" stroke="var(--ink)" fill="none">
              <path d="M0 450 L1440 450" strokeWidth="0.5"/>
              <path d="M720 0 L720 900" strokeWidth="0.5"/>
            </g>
          </svg>
        </motion.div>

        <div className="ih-inner" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">Insights & Intelligence</div>
            <h1>Cultural <em>Systems.</em></h1>
          </motion.div>
          
          <motion.p 
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            A repository of strategic observations, operating models, and venture perspectives distilled for the modern builder.
          </motion.p>
        </div>
      </header>

      <div className="insights-grid">
        <h2 className="section-title">
          Latest <em>Releases.</em>
          <span>Vol. 01 — 2024</span>
        </h2>
        
        {loading ? (
          <div style={{ gridColumn: 'span 12', padding: '100px 0', textAlign: 'center', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Retrieving Substack Feed...
            </motion.div>
          </div>
        ) : articles.length > 0 ? (
          articles.map((article, index) => {
            // Extract a clean description (removing HTML tags)
            const cleanDesc = article.description.replace(/<[^>]*>?/gm, '').substring(0, 200);
            
            // Format date
            const date = new Date(article.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            // Improved image extraction
            let imageUrl = '';
            
            // 1. Check enclosure (rss2json standard for high res images)
            if (article.enclosure && article.enclosure.link && (article.enclosure.type?.includes('image') || !article.enclosure.type)) {
              imageUrl = article.enclosure.link;
            } 
            // 2. Check thumbnail property (rss2json often pulls the social share image here)
            else if (article.thumbnail && !article.thumbnail.includes('substack-post-placeholder') && !article.thumbnail.includes('icon')) {
              imageUrl = article.thumbnail;
            }
            // 3. Extract from content/description HTML with a more robust regex
            else {
              const fullContent = article.content || article.description || '';
              // Look for the first img tag src, specifically looking for Substack's CDN pattern if possible
              const imgMatch = fullContent.match(/<img[^>]+src="([^">?]+)/);
              if (imgMatch) {
                imageUrl = imgMatch[1];
              }
            }

            // Clean up imageUrl (sometimes they come with query params that Substack uses for resizing)
            if (imageUrl && imageUrl.includes('substack-post-assets')) {
              // Ensure we aren't getting a tiny version
              if (imageUrl.includes('w_')) {
                imageUrl = imageUrl.replace(/w_\d+/, 'w_1200'); 
              }
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
                <div className="image-container">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={article.title} 
                      className="article-img" 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <div className="fallback-bg">
                      <div style={{ opacity: 0.1 }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                          <circle cx="20" cy="20" r="18" strokeWidth="0.5"/>
                          <path d="M20 2 L20 38 M2 20 L38 20" strokeWidth="0.5"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="article-content">
                  <div className="article-date">{date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-desc">{cleanDesc}...</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                    Read Article
                  </a>
                </div>
              </motion.article>
            );
          })
        ) : (
          <div style={{ gridColumn: 'span 12', padding: '100px 0', textAlign: 'center', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '11px' }}>
            No insights available at this time.
          </div>
        )}
      </div>

      <div className="newsletter-bottom" style={{ padding: '100px 48px', textAlign: 'center', background: 'var(--parchment)', borderTop: '1px solid rgba(var(--rgb-ink), 0.05)' }}>
        <p className="eyebrow" style={{ marginBottom: '24px' }}>The Dojo Dispatch</p>
        <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', marginBottom: '16px', color: 'var(--ink)' }}>Distilled <em>Intelligence.</em></h2>
        <p style={{ color: 'var(--warm-grey)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px', fontSize: '15px' }}>Join our community of over 5,000 founders and creative leaders receiving weekly systems for strategic growth.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe 
            src="https://lotusroomos.substack.com/embed" 
            width="480" 
            height="150" 
            style={{ 
              maxWidth: '100%',
              border: 'none', 
              background: 'transparent',
              borderRadius: '12px'
            }} 
            frameBorder="0" 
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
