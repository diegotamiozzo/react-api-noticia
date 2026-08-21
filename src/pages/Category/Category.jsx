import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import EmptyState from '../../components/EmptyState/EmptyState';
import { categories } from '../../data/categories';
import './Category.css';

export default function Category() {
  const { categoryId } = useParams();
  const { news, loading, error, fetchNews } = useNews();

  const currentCategory = categories.find(c => c.id === categoryId) || { name: categoryId, id: categoryId };

  useEffect(() => {
    if (categoryId) {
      fetchNews({ category: categoryId });
    }
  }, [categoryId, fetchNews]);

  return (
    <div className="category-page container">
      <div className="category-header-info">
        <h1>{currentCategory.name}</h1>
        <p>Acompanhe as principais notícias e atualizações sobre {currentCategory.name.toLowerCase()}.</p>
      </div>

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && news.length === 0 && (
        <EmptyState message={`Nenhuma notícia encontrada na categoria ${currentCategory.name}.`} />
      )}

      {!loading && !error && news.length > 0 && (
        <NewsGrid articles={news} />
      )}
    </div>
  );
}
