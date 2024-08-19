import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'; // import the CSS file

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`} className="view-info-link">
        View Info
      </Link>
    </div>
  );
}

export default MovieCard;