import { useState, useEffect, useCallback } from 'react';
import { getNews } from '../services/newsApi';

export const useNews = (initialParams = {}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const mergedParams = { ...initialParams, ...params };
      const data = await getNews(mergedParams);
      setNews(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar as notícias.');
    } finally {
      setLoading(false);
    }
  }, [initialParams.query, initialParams.category, initialParams.country, initialParams.language]);

  return { news, loading, error, fetchNews };
};
