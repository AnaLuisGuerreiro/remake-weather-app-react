import React from "react";

import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="strings" />
      <img src="img/string_1.png" alt="string" className="string-1" />
      <img src="img/string_2.png" alt="string" className="string-2" />
      <img src="img/string_3.png" alt="string" className="string-3" />
      <img src="img/string_4.png" alt="string" className="string-4" />
      <img src="img/string_5.png" alt="string" className="string-5" />
      <div />
      <div className="week-1">
        <span className="days">Mon</span>
        22ºC
        <br />
        <img src="img/rain.png" alt="rain" width="50" />
      </div>
      <div className="week-2">
        <span className="days">Tue</span>
        19ºC
        <br />
        <img src="img/cloud_sun.png" alt="cloud_sun" width="50" />
      </div>
      <div className="week-3">
        <span className="days">Wed</span>
        20ºC
        <br />
        <img src="img/sun.png" alt="sun" width="57" />
      </div>
      <div className="week-4">
        <span className="days">Thu</span>
        18ºC
        <br />
        <img src="img/storm.png" alt="storm" width="50" />
      </div>
      <div className="week-5">
        <div className="days">Fri</div>
        21ºC
        <br />
        <img src="img/cloud_sun.png" alt="cloud_sun" width="50" />
      </div>
    </div>
  );
}
