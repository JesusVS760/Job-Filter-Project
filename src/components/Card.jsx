import React from "react";
import "./Card.css";

const Card = ({ company, position }) => {
  console.log(position);
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-profile-img">
          <img src={company} alt="profile image" />
        </div>
        <div className="card-content">
          <div className="profile-company-info">
            <h3 className="company-name"></h3>
            <h3 className="new">new</h3>
            <h3 className="featured">featured</h3>
          </div>
          <div className="comapny-job-position">
            <h2 className="job-title">{position}</h2>
          </div>
          <div className="card-conditions">
            <p>1d ago</p>
            <p>Part Time</p>
            <p>Remote</p>
          </div>
        </div>
      </div>
      <div className="card-skills-filter">
        <p>Frontend</p>
        <p>Senior</p>
        <p>HTML</p>
      </div>
    </div>
  );
};

export default Card;
