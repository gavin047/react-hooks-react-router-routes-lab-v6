import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <a href={`/movie/${movie.id}`}>View Info</a>

    </div>
  );
}

export default MovieCard;
