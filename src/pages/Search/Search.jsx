import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import EmptyState from '../../components/EmptyState/EmptyState';
import './Search.css';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { news, loading, error, fetchNews } = useNews();

  useEffect(() => {
    if (query) {
      fetchNews({ query });
    }
  }, [query, fetchNews]);

  return (
    <div className="search-page container">
      <div className="search-header-info">
        <h1>Resultados da busca</h1>
        <p>Mostrando resultados para: <strong>&ldquo;{query}&rdquo;</strong></p>
      </div>

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && news.length === 0 && (
        <EmptyState message={`Nenhuma notícia encontrada para "${query}". Tente outro termo.`} />
      )}

      {!loading && !error && news.length > 0 && (
        <NewsGrid articles={news} />
      )}
    </div>
  );
}
