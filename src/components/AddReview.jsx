import React, { useState } from "react";
import axios from "axios";
import "./AddReview.css";

const AddReview = ({ movieId, addReview, reviews }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      movieId,
      reviewText,
      rating: parseInt(rating, 10),
      reviewerName,
    };

    try {
      const response = await axios.post(
        "http://localhost:5005/reviews",
        newReview
      );
      if (response.data) {
        addReview(response.data);
        setReviewText("");
        setRating("");
        setReviewerName("");
      }
    } catch (error) {
      console.error("Failed to add review", error);
      setError("Failed to add review. Please try again.");
    }
  };

  const handleReviewTextChange = (e) => {
    if (e.target.value.length <= 125) {
      setReviewText(e.target.value);
    }
  };

  return (
    <div className="out-con-review">
      <div className="add-review-section">
        <h1>Reviews</h1>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Wanna be the first one?</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h4 className="reviewer-name">Reviewer: {review.reviewerName}</h4>
                <span className="rating">Rating: {review.rating}/5</span>
              </div>
              <div className="review-body">
                <p>{review.reviewText}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="add-review-container">
        <h3>Add Review</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="adc-name">
            Your Name:
            <input
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              required
            />
          </label>
          <label className="adc-review">
            Review:
            <textarea
              value={reviewText}
              onChange={handleReviewTextChange}
              required
            ></textarea>
            <p>{reviewText.length}/125</p>
          </label>

          <label className="adc-rating">
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <button type="submit">Send Review</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
