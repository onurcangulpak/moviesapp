import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OneMovie.css";

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/movies/${id}`)
      .then((response) => {
        if (response.data) {
          setMovie(response.data);
        } else {
          navigate("/notfound");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error while getting the movie", error);
        setError("Failed to load movie details.");
        setLoading(false);
        navigate("/notfound");
      });
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <p>Categories: {movie.categories.join(", ")}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
      <p>Artists: {movie.artists.join(", ")}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
};

export default OneMovie;
