import React from "react";
import { TbWorldSearch } from "react-icons/tb";
import "./MovieSearchBar.css";

const MovieSearchBar = () => {
  return (
    <div className="movie-search-bar">
      <h2 className="movie-search-bar__title">
        Qual filme você quer descobrir hoje?
      </h2>
      <div className="movie-search-bar__controls">
        <input
          type="text"
          className="movie-search-bar__input"
          placeholder="digite o nome do filme"
        />
        <button className="movie-search-bar__button">
          <TbWorldSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default MovieSearchBar;