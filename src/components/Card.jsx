import React, { useState } from "react";
import "./Card.css";
//NOTES FOR NEXT TIME:
// pass the entire array of objects to the card so...
// we can filter in the context of the entire array NOT
// the job itself (defeats the purpose; can only filter within the job)

const Card = ({ data }) => {
  const [filterItems, setFilterItems] = useState(data);
  const [activeFilters, setActiveFilters] = useState([]);

  // console.log(filterItems);
  const handleFilterItems = (selectedLanguage) => {
    console.log(selectedLanguage);
    const included = data.filter((job) =>
      job.languages.includes(selectedLanguage)
    );
    setFilterItems(included);

    if (!activeFilters.includes(selectedLanguage)) {
      setActiveFilters([...activeFilters, selectedLanguage]);
    }
    // console.log(excluded);
    // console.log(filterItems); // Log filtered items to verify
  };

  const removeCatagory = (languageToRemove) => {
    // Remove the language from activeFilters
    const updatedFilters = activeFilters.filter(
      (language) => language !== languageToRemove
    );
    setActiveFilters(updatedFilters);

    // Update filterItems based on the remaining active filters
    const filteredItems = data.filter((job) =>
      updatedFilters.every((filter) => job.languages.includes(filter))
    );
    setFilterItems(filteredItems);
  };

  return (
    <>
      {activeFilters.length > 0 && (
        <div className="active-filters">
          {activeFilters.map((filter, index) => (
            <div key={index} className="filter-item">
              {filter}
              <button onClick={() => removeCatagory(filter)} className="remove">
                X
              </button>
            </div>
          ))}
        </div>
      )}
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
