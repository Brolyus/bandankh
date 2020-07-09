import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [nameLogo, setNameLogo] = useState(true);

  useEffect(() => {
    const scrolledDown = () => {
      if (window.scrollY > 150) {
        setNameLogo(false);
      } else if (window.scrollY <= 150) {
        setNameLogo(true);
      }
    };
    return window.addEventListener("scroll", scrolledDown);
  });

  return (
    <header>
      <ul>
        <li className="navLink">
          <Link to="/nosdates">
            <p>Les dates</p>
          </Link>
        </li>
        <li className="navLink">
          <Link to="/groupe">
            <p>Le groupe</p>
          </Link>
        </li>
        <li className="navLogo">
          <Link to="/">
            {nameLogo ? (
              <img className="mainLogo" src="./images/logos/logofondnoir.png" alt="logo du groupe"/>
            ) : (
              <img className="altLogo" src="./images/logos/logoheader.png" alt="logo du groupe"/>
            )}
          </Link>
        </li>
        <li className="navLink">
          <Link to="/medias">
            <p>Nos médias</p>
          </Link>
        </li>
        <li className="navLink">
          <Link to="/jukebox">
            <p>Le jukebox</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
