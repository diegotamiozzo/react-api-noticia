import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsGrid.css';

export default function NewsGrid({ articles, featuredArticle }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="news-grid-wrapper">
      {featuredArticle && (
        <div className="featured-section">
          <NewsCard article={featuredArticle} featured={true} />
        </div>
      )}
      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={article.article_id || index} article={article} />
        ))}
      </div>
    </div>
  );
}
