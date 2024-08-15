import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-profile-img">
          <img src="" alt="profile image" />
        </div>
        <div className="card-content">
          <div className="profile-company-info">
            <h3 className="company-name"></h3>
            <h3 className="new"></h3>
            <h3 className="featured"></h3>
          </div>
          <div className="comapny-job-position">
            <h2 className="job-title"></h2>
          </div>
          <div className="card-conditions">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="card-skills-filter">
        <p></p>
      </div>
    </div>
  );
};

export default Card;
