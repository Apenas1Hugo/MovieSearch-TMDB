import React, { useEffect, useState } from "react";
import "./Populares.css";

const Populares = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const API_KEY = "5404b2e0ff2b3428404dddef494197e5";
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const data = await res.json();
        setMovies(data.results.slice(0, 10)); //busacando 10 filmes
      } catch (err) {
        console.error("Erro ao buscar filmes populares:", err);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="populares-container">
      {movies.map((movie) => (
        <div key={movie.id} className="populares-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="populares-poster"
          />
          <p className="populares-title">{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Populares;
