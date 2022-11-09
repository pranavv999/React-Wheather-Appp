import React from "react";
import "./no-results.css";
import Slider from "../slider/slider";

const NoResults = ({delayInMs, data}) => {
  return (
    <div className="no-result-parent">
      <Slider delay={delayInMs} data={data}/>
      <img
        alt="weather"
        src="icons/partly-cloudy.svg"
        className="weather-img"
      />
    </div>
  );
};

export default NoResults;