import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Overview() {
  return (
    <div className="Overview">
      <div className={`row`}>
        <div className={`col-4`}>
          <ul>
            <li>Kyiv</li>
            <li>Wednesday</li>
            <li>Clouds</li>
          </ul>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col - 3`}>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="#000"
            size={48}
            animate={true}
          />
        </div>
        <div className={`col-3`}>
          <h2>-3</h2>
        </div>
        <div className={`col-6`}>
          <ul>
            <li> Precipitacion: 69%</li>
            <li> Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
