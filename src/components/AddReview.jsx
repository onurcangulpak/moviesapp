import React, { useState } from "react";

const AddReview = ({ movieId, addReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  //handle submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      movieId,
      reviewText,
      rating,
      reviewerName,
    };
    addReview(newReview);
    setReviewText("");
    setRating("");
    setReviewerName("");
  };

  return (
    <div className="add-review-container">
      <h3> Add review</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
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
          />
        </label>
        <label>
          Review:{" "}
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Send Review</button>
      </form>
    </div>
  );
};

export default AddReview;
