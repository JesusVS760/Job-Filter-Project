import React, { useState } from "react";
import "./App.css";
import headerImage from "../images/bg-header-desktop.svg";
import Card from "./components/Card";
import json from "../data.json";
const App = () => {
  const [data, setData] = useState(json);
  return (
    <div className="app-container">
      <div className="app-style-image">
        <img src={headerImage} alt="header image" />
      </div>
      <Card data={data} />
    </div>
  );
};

export default App;
