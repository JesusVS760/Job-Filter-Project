import React from "react";
import "./App.css";
import headerImage from "../images/bg-header-desktop.svg";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-style-image">
        <img src={headerImage} alt="header image" />
      </div>
    </div>
  );
};

export default App;
