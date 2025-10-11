import React, { useState } from "react";
import { TbWorldSearch } from "react-icons/tb";
import "./MovieSearchBar.css";
import "./MovieSearchResult.css";

const API_KEY = "5404b2e0ff2b3428404dddef494197e5";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieSearchBar = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState(
    "Qual filme você quer descobrir hoje?"
  );
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const searchMovie = () => {
    if (!query.trim()) return;

    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
        query
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length) {
          const first = data.results[0];
          setMovie({
            title: first.title,
            synopsis: first.overview,
            poster: first.poster_path
              ? `${IMG_BASE_URL}${first.poster_path}`
              : null,
          });
          setError(false);
          setMessage("Era isso que procurava?");
        } else {
          setMovie(null);
          setError(true);
          setMessage("Poxa, não achamos o que você procura");
        }
      })
      .catch(() => {
        setMovie(null);
        setError(true);
        setMessage("Poxa, não achamos o que você procura");
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") searchMovie();
  };

  return (
    <>
      <div className="movie-search-bar">
        <h2 className="movie-search-bar__title">{message}</h2>
        <div className="movie-search-bar__controls">
          <input
            type="text"
            className="movie-search-bar__input"
            placeholder="digite o nome do filme"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="movie-search-bar__button"
            onClick={searchMovie}
          >
            <TbWorldSearch size={20} />
          </button>
        </div>
      </div>
      {movie && !error && (
        <div className="movie-search-result">
          {movie.poster && (
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-search-result__poster"
            />
          )}
          <h3 className="movie-search-result__title">
            {movie.title}
          </h3>
          <p className="movie-search-result__synopsis">
            {movie.synopsis}
          </p>
        </div>
      )}
    </>
  );
};

export default MovieSearchBar;
