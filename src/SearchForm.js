import React from "react";
import Forecast from "./Forecast";
import Overview from "./Overview";
export default function SearchForm() {
  return (
    <div className={`container`}>
      <div className="weather-app">
        <div className={`row`}>
          <div className={`col-6`}>
            <input
              type="text"
              placeholder="enter a city"
              className={`form-control`}
            ></input>
          </div>
          <div className={`col-2`}>
            <button type="Submit" className={`btn btn-primary w-100`}>
              Search
            </button>
          </div>
          <div className={`col-2`}>
            <button type="Submit" className={`btn btn-success w-100`}>
              Current
            </button>
          </div>
        </div>
        <Overview />
        <Forecast />
      </div>
    </div>
  );
}
