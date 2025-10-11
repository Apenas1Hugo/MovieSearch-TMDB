const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const DEFAULT_LANG = 'pt-BR';

async function tmdbFetch(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', DEFAULT_LANG);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erro TMDB: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export default tmdbFetch;
export function searchMovies(query) {
  return tmdbFetch('/search/movie', { query });
}
