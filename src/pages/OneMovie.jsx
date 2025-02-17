import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OneMovie.css";
import AddReview from "../components/AddReview";
import OtherMovies from "../components/OtherMovies";

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await axios.get(
          `http://localhost:5005/movies/${id}`
        );
        const reviewsResponse = await axios.get(
          `http://localhost:5005/reviews?movieId=${id}`
        );

        if (movieResponse.data) {
          setMovie(movieResponse.data);
          setReviews(reviewsResponse.data);
        } else {
          navigate("/notfound");
        }
      } catch (error) {
        console.log("Error while getting the movie", error);
        setError("Failed to load movie details.");
        navigate("/notfound");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id, navigate]);

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="app-container"> 
    <div className="one-movie-container">
      <div className="movie-details">
        <div className="movie-details-img"> 
        <img src={movie.image} alt={movie.title} className="movie-image" />
        </div> 
        <div className="mv-details"> 
        <h2>
          {movie.title} ({movie.year})
        </h2>
        <p><b>Categories:</b> {movie.categories.join(", ")}</p>
        <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
        <p><b>Artists:</b> {movie.artists.join(", ")}</p>
        <p><b>Description:</b> {movie.description}</p>
        </div>
        </div>
       
  

      <div className="addReview-OtherMovies">
          <div className="rc-add-review">
          {" "}
          <AddReview
            movieId={movie.id}
            reviews={reviews}
            addReview={addReview}
          />
         </div>
          <div className="random-movie-seciton">
          <OtherMovies/> 
          </div>
      </div>

    </div>
    </div>
  );
};

export default OneMovie;
