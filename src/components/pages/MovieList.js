import React from 'react';
import MovieCard from './MovieCard';
import '../Assets/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list bg-dark">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
