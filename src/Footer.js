import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <span className="coded"> Coded by Ana Guerreiro</span>
      <br />
      <a href="https://www.linkedin.com/in/ana-luis-guerreiro/">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
      </a>
      <a href="https://github.com/AnaLuisGuerreiro/weather_app">
        <FontAwesomeIcon icon={faGithub} className="github" />
      </a>
    </footer>
  );
}
