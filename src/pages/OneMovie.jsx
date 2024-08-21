import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OneMovie.css"

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error while getting the movies");
        setLoading(false);
        setError("Failed to load movie details");
      });
  }, [id]);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }
  return (
    <div key={movie.id}>
      <div className="movie-details">
        <img src={movie.image} alt={movie.title} />
        <h2>
          {movie.title} ({movie.year})
        </h2>
        <p>Categories: {movie.categories.join(", ")}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
        <p>Artists: {movie.artists.join(", ")}</p>
        <p>Description: {movie.description}</p>
      </div>
    </div>
  );
};

export default OneMovie;
