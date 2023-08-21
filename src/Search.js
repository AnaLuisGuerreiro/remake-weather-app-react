import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="city_form">
        <input
          type="text"
          className="enter"
          placeholder="Enter a city"
          id="user_city"
        />
        <FontAwesomeIcon icon={faPencil} id="pencil" />
        <FontAwesomeIcon icon={faLocationDot} id="loc_dot" />
      </form>
    </div>
  );
}
