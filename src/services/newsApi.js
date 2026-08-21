const API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'pub_ee9f1dc6f1e549c587ced033fc5f29ba';
const BASE_URL = 'https://newsdata.io/api/1';

export const getNews = async ({ query = '', category = '', country = 'br', language = 'pt' } = {}) => {
  let url = `${BASE_URL}/latest?apikey=${API_KEY}&country=${country}&language=${language}`;
  
  if (category) {
    url += `&category=${category}`;
  }
  
  if (query) {
    url += `&q=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === 'success') {
    return data.results || [];
  } else {
    throw new Error(data.results?.message || 'Erro ao buscar notícias da API.');
  }
};
