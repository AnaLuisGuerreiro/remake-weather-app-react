import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

import Search from "./Search";
import "./main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="box_info">
        <Search />
        <div className="main_info">
          <div className="day_temp">
            <span id="date_time"> Today 14h00 </span>
            <FontAwesomeIcon icon={faClock} />
            <br />
            <span className="weather_day"> Sun </span>
          </div>

          <div className="container">
            <h1 className="city">Porto</h1>
            <div>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                className="icon_day"
                alt=""
                id="icon"
              />
              <h2 className="current_temp" id="current_temp">
                22
              </h2>
            </div>
            <span className="celsius">ºC</span>
          </div>
        </div>

        <div className="precipitation_wind">
          <FontAwesomeIcon icon={faDroplet} />
          <span className="humidity"> Precipitation: 11%</span>
          <br />
          <FontAwesomeIcon icon={faWind} />
          <span className="wind"> Wind: 15 km/h</span>
        </div>
      </div>
    </div>
  );
}
