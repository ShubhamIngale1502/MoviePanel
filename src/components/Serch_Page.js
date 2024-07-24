import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from './pages/MovieList';

const Serch_Page = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  function fetchMovies(){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`).then(result=>{
      setMovies(result.data.results);
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(() => {
    fetchMovies();
  }, [query]);
  

  return (
    <div>
      <h1 className='bg-dark p-3 text-light'>Search Results for "{query}"</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Serch_Page;
