import React from "react";
import "./styles.css";

function ReviewSection() {
  return (
    <div className="review-container">
      <div className="review-wrapper">
        <div className="review-title">
          <h1>REVIEWS</h1>
        </div>
        <div className="review-wrapper-items">
          <div className="review-items">
            <div className="review-stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p className="review-text-title">ARTIST</p>
            <p className="review-text">
              <span>"Love it, it's the</span>
              <span>Best. I Can't live</span>
              <span>without it!"</span>
            </p>
          </div>
          <div className="review-items">
            <div className="review-stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p className="review-text-title">PRODUCER</p>
            <p className="review-text">
              <span>"Love it, it's the</span>
              <span>Best. I Can't live</span>
              <span>without it!"</span>
            </p>
          </div>
          <div className="review-items">
            <div className="review-stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p className="review-text-title">MUSIC FAN</p>
            <p className="review-text">
              <span>"Love it, it's the</span>
              <span>Best. I Can't live</span>
              <span>without it!"</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
