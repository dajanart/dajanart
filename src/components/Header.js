import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../gallerie/Logo.jpg";
import "./Header.css";

const Header = () => {
  const REITER = [
    {
      titel: "Startseite",
      pfad: "/dajanart",
    },
    {
      titel: "Gallerie",
      pfad: "/gallerie",
    },
    {
      titel: "Kontakt",
      pfad: "/kontakt",
    },
  ];

  return (
    <div className="header">
      <div className="item links">
        <img className="logo" src={logo} alt="Medusa" />
      </div>
      <div className="item mitte">
        {" "}
        {REITER.map((item, index) => (
          <h3 key={item.titel}>
            <NavLink key={item.titel} className="navigation" to={item.pfad}>
              {item.titel}
            </NavLink>
          </h3>
        ))}
      </div>
      <div className="item rechts"></div>
    </div>
  );
};

export default Header;
