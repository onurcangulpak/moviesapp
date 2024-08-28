import React, { useState } from "react";
import axios from "axios";
import "./AddReview.css";

const AddReview = ({ movieId, addReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [error, setError] = useState(null);

  // handleSubmit as an async function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      movieId,
      reviewText,
      rating: parseInt(rating, 10),
      reviewerName,
    };

    try {
      //POST request to add review
      const response = await axios.post(
        "http://localhost:5005/reviews",
        newReview
      );
      if (response.data) {
        // addReview callback to update the parent component
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

  return (
    <div className="add-review-container">
      <h3>Add Review</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
        </label>

        <label>
          Rating (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>

        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </label>

        <button type="submit">Send Review</button>
      </form>
    </div>
  );
};

export default AddReview;
