import React from 'react'
import './ReviewList.css'

const ReviewList = ({reviews}) => {
  return (
    <div className="reviews-section">
    <h3> Reviews</h3>
    {reviews.length === 0 ? (
      <p>No reviews yet.</p>
    ) : (
      reviews.map((review, index) => (
        <div key={index} className="review">
          <h4>
            {review.reviewerName} - {review.rating}/5
          </h4>
          <p>{review.reviewText}</p>
        </div>
      ))
    )}
  </div>
  )
}

export default ReviewList
