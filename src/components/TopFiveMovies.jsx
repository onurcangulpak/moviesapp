import React from "react";
import { Link } from "react-router-dom";

const TopFiveMovies = ({movies}) => {
  return (
    <div className="top-5-movies">
      {movies.length === 0 ? (
        <div> Loading... </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.image} alt="movieimages" />
                <h2>{movie.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopFiveMovies;
