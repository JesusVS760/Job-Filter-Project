import React from "react";
import "./Card.css";

const Card = ({ job }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-profile-img">
          <img src={job.logo} alt="profile image" />
        </div>
        <div className="card-content">
          <div className="profile-company-info">
            <h3 className="company-name">{job.company}</h3>
            <h3 className="new">{job.new ? "NEW!" : ""}</h3>
            <h3 className="featured">{job.featured ? "FEATURED" : ""}</h3>
          </div>

          <div className="comapny-job-position">
            <h2 className="job-title">{job.position}</h2>
          </div>
          <div className="card-conditions">
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className="card-skills-filter">
        <button>{job.role}</button>
        <button>{job.level}</button>
        {job.tools.length > 0 ? <button>{job.tools}</button> : ""}
        {job.languages.map((language, index) => (
          <button key={index}>{language}</button>
        ))}
      </div>
    </div>
  );
};

export default Card;
