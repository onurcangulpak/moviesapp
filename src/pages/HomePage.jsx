import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css"

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((response) => {
        const sortedMovies = response.data.sort(
          (a, b) => b.imdbRating - a.imdbRating
        );
        setMovies(sortedMovies.slice(0, 5));
      })
      .catch((error) => {
        console.log("Error while getting the movies", error);
      });
  }, []);

  return (
      <div className="top-5-movies">
        {movies.length === 0 ? (
          <div> Loading... </div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <img src={movie.image} alt={movie.title}></img>
                <h2>{movie.title}</h2>
                <p>IMDB rate: {movie.imdbRating}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default HomePage;
