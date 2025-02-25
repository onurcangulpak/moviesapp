import React from "react";
import { Link } from "react-router-dom";
import "./TopFiveMovies.css";

const TopFiveMovies = ({ movies }) => {
  return (
   
    <div className="top-5-movies-con">
      <h3> TOP 5 MOVIES </h3>
      <div className="top5-under-line"></div>
      {movies.length === 0 ? (
        <div> Loading... </div>
      ) : (
        <ul className="top-5-movies">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="top-5-movies-card">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="top-5-movies-img"
                  />
                  <h4>{movie.title}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
   
  );
};

export default TopFiveMovies;
