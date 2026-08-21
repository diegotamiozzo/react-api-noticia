import React, { useEffect } from 'react';
import { useNews } from '../../hooks/useNews';
import FeaturedCarousel from '../../components/FeaturedCarousel/FeaturedCarousel';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import EmptyState from '../../components/EmptyState/EmptyState';
import { categories } from '../../data/categories';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const { news, loading, error, fetchNews } = useNews();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const featuredArticle = news.length > 0 ? news[0] : null;
  const remainingArticles = news.length > 1 ? news.slice(1) : [];

  return (
    <div className="home-page container">
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && news.length === 0 && (
        <EmptyState message="Nenhuma notícia recente encontrada no momento." />
      )}

      {!loading && !error && news.length > 0 && (
        <>
          <FeaturedCarousel articles={news.slice(0, 5)} />

          <section className="category-quick-links">
            <h2>Navegue por Categorias</h2>
            <div className="quick-links-grid">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/category/${cat.id}`} className="quick-link-card">
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="latest-news-section">
            <div className="section-header">
              <h2>Últimas Notícias</h2>
            </div>
            <NewsGrid articles={remainingArticles} />
          </section>
        </>
      )}
    </div>
  );
}
