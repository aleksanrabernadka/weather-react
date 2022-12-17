import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className={`row`}>
        <div className={`col - 2`}>
          <p>Thu</p>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
        <div className={`col - 2`}>
          <p>Thu</p>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
        <div className={`col - 2`}>
          <p>Thu</p>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
        <div className={`col - 2`}>
          <p>Thu</p>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
        <div className={`col - 2`}>
          <p>Thu</p>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
      </div>
    </div>
  );
}
