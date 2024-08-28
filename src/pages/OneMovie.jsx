import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OneMovie.css";
import AddReview from "../components/AddReview";
import ReviewList from "../components/ReviewList";

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
          setReviews(reviewsResponse.data); // Set the fetched reviews
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
    <div className="one-movie-container">
      
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

      <div className="review-section"> 
      <div className="rc-review-list"> <ReviewList reviews={reviews} /> </div>
      <div className="rc-add-review">  <AddReview movieId={movie.id} addReview={addReview} /></div>
     
     
      </div>
      
    </div>
  );
};

export default OneMovie;
