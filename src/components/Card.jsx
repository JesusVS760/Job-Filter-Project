import React, { useState } from "react";
import "./Card.css";
//NOTES FOR NEXT TIME:
// pass the entire array of objects to the card so...
// we can filter in the context of the entire array NOT
// the job itself (defeats the purpose; can only filter within the job)

const Card = ({ data }) => {
  const [filterItems, setFilterItems] = useState(data);
  // console.log(filterItems);
  const handleFilterItems = (selectedLanguage) => {
    const filterItems = data.filter((job) =>
      job.languages.includes(selectedLanguage)
    );
    setFilterItems(filterItems);
    console.log(filterItems); // Log filtered items to verify
  };

  return (
    <>
      {filterItems.map((job) => (
        <div className="card-container" key={job.id}>
          <div className="card-header">
            <div className="card-profile-img">
              <img src={job.logo} alt="profile image" />
            </div>
            <div className="card-content">
              <div className="profile-company-info">
                <h3 className="company-name">{job.company}</h3>
                <h3 className={job.new ? "new" : ""}>
                  {job.new ? "NEW!" : ""}
                </h3>
                <h3 className={job.featured ? "featured" : ""}>
                  {job.featured ? "FEATURED" : ""}
                </h3>
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
              <button onClick={() => handleFilterItems(language)} key={index}>
                {language}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
