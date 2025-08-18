import React from "react";
import "./MovieSearchBar.css";

const MovieSearchBar = () => {
  return (
    <div className="movie-search-bar">
      <h2 className="movie-search-bar__title">
        que filme você está procurando?
      </h2>
      <div className="movie-search-bar__controls">
        <input
          type="text"
          className="movie-search-bar__input"
          placeholder="digite o nome do filme"
        />
        <button className="movie-search-bar__button">Buscar</button>
      </div>
    </div>
  );
};

export default MovieSearchBar;
