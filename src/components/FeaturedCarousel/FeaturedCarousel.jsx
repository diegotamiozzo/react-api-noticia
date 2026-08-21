import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import { truncateText } from '../../utils/truncateText';
import './FeaturedCarousel.css';

export default function FeaturedCarousel({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const validArticles = articles.filter(item => item.image_url).slice(0, 5);

  useEffect(() => {
    if (validArticles.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validArticles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [validArticles.length]);

  if (!validArticles || validArticles.length === 0) return null;

  const current = validArticles[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? validArticles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validArticles.length);
  };

  return (
    <div className="featured-carousel">
      <div className="carousel-slide">
        <div className="carousel-image-container">
          <img src={current.image_url} alt={current.title} className="carousel-image" />
          <div className="carousel-gradient"></div>
          <span className="carousel-badge">Destaque</span>
        </div>
        <div className="carousel-content">
          <div className="carousel-meta">
            <span className="carousel-source">{current.source_id || 'Portal'}</span>
            <span className="carousel-date">
              <Calendar size={14} />
              {formatDate(current.pubDate)}
            </span>
          </div>
          <h2 className="carousel-title">
            <a href={current.link} target="_blank" rel="noopener noreferrer">
              {current.title}
            </a>
          </h2>
          <p className="carousel-desc">
            {truncateText(current.description || current.content, 140)}
          </p>
          <a href={current.link} target="_blank" rel="noopener noreferrer" className="carousel-link">
            Ler matéria completa <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {validArticles.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-btn next" onClick={handleNext} aria-label="Próximo">
            <ChevronRight size={24} />
          </button>

          <div className="carousel-dots">
            {validArticles.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
