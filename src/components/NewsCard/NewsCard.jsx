import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { truncateText } from '../../utils/truncateText';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import './NewsCard.css';

export default function NewsCard({ article, featured = false }) {
  const imageUrl = article.image_url || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
  const categoryName = article.category ? article.category[0] : 'Geral';

  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      <div className="news-card-image-wrapper">
        <img src={imageUrl} alt={article.title} className="news-card-image" loading="lazy" />
        <span className="news-card-category">{categoryName}</span>
      </div>
      <div className="news-card-content">
        <div className="news-card-meta">
          <span className="news-card-source">{article.source_id || 'Fonte'}</span>
          <span className="news-card-date">
            <Calendar size={13} />
            {formatDate(article.pubDate)}
          </span>
        </div>
        <h3 className="news-card-title">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        <p className="news-card-description">
          {truncateText(article.description || article.content, featured ? 160 : 100)}
        </p>
        <div className="news-card-footer">
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="news-card-link"
          >
            Ler notícia completa <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
