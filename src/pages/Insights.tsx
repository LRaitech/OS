import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          padding: 80px 48px;
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
          font-size: clamp(44px, 6vw, 72px);
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
          font-size: 16px;
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
          grid-template-columns: 1fr;
          gap: 64px;
          padding: 80px 48px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .section-title {
          font-family: var(--fd);
          font-size: 32px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 40px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(var(--rgb-ink), 0.08);
        }
        
        .article-card {
          margin-bottom: 64px;
        }
        .article-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          margin-bottom: 24px;
          background: rgba(var(--rgb-ink), 0.04);
        }
        .article-date {
          font-family: var(--fm);
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--warm-grey);
          margin-bottom: 12px;
        }
        .article-title {
          font-family: var(--fd);
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .article-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--warm-grey2);
          line-height: 1.6;
          margin-bottom: 20px;
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
        
        footer {
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
            padding: 56px 20px;
          }
          .insights-hero {
            padding: 56px 20px;
          }
          footer {
            padding: 40px 20px;
            grid-template-columns: 1fr 1fr;
          }
          .footer-cta {
            text-align: left;
          }
        }
      `}</style>

      <div className="insights-hero">
        <div className="ih-inner">
          <div className="eyebrow">Insights & Systems</div>
          <h1><em>Culture by Design</em></h1>
          <p className="hero-sub">Essays on brand strategy, AI frameworks, and building ventures that scale. Join the newsletter to get our latest systems directly in your inbox.</p>
        </div>
      </div>

      <div className="insights-grid">
        <div className="articles-col">
          <h2 className="section-title">Latest Articles</h2>
          
          {loading ? (
            <div style={{ padding: '40px 0', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '12px' }}>Loading articles...</div>
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

              return (
                <article key={index} className="article-card">
                  {imageUrl && (
                    <img src={imageUrl} alt={article.title} className="article-img" referrerPolicy="no-referrer" />
                  )}
                  <div className="article-date">{date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-desc" dangerouslySetInnerHTML={{ __html: cleanDesc }}></p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">Read full article →</a>
                </article>
              );
            })
          ) : (
            <div style={{ padding: '40px 0', color: 'var(--warm-grey)', fontFamily: 'var(--fm)', fontSize: '12px' }}>No articles found.</div>
          )}
        </div>
      </div>

      <div className="newsletter-bottom" style={{ padding: '80px 48px', textAlign: 'center', borderTop: '1px solid rgba(var(--rgb-ink), 0.08)' }}>
        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '32px', marginBottom: '16px' }}>Join the Newsletter</h2>
        <p style={{ color: 'var(--warm-grey)', marginBottom: '32px' }}>Get our latest systems directly in your inbox.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe src="https://lotusroomos.substack.com/embed" width="480" height="150" style={{ border: '1px solid rgba(var(--rgb-ink), 0.1)', background: 'transparent', borderRadius: '4px' }} frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  );
}
