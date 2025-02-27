import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./SearchedMovies.css"

const SearchedMovies = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((response) => {
        const filteredMovies = response.data.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setMovies(filteredMovies);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "Error while fetching [Searched movies]");
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="app-container"> 
    <NavBar/>
    <div className="splinter-general"></div>
    <div className="movie-container">

      <h1>Search results for "<span className="query-text"> {query} </span>".</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        
        
        <ul className="movies-general">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} alt="movieimages" />
                <h2>{movie.title}</h2>
                </Link>
              </li>
            ))
          ) : (
            <p>No movies found matching "<span className="query-text"> {query} </span>". </p>
          )}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SearchedMovies;