import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OtherMovies.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const OtherMovies = () => {
  const [movies, setMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:5005/movies");
        setMovies(response.data);
        setRandomMovies(getRandomMovies(response.data, 5));
      } catch (error) {
        console.log("Error fetchin movies from OtherMovies.jsx", error);
      }
      setLoading(false)
    };
    fetchMovies();
  }, [location]);

  const getRandomMovies = (moviesArray, count) => {
    const shuffled = moviesArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="other-movies-container">
    <h3>Check out other movies!</h3>
    <ul className="random-movies">
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        randomMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div className="random-movie-card">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="random-movie-img"
                />
                <h4>{movie.title}</h4>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  </div>
  );
};

export default OtherMovies;