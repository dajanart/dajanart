import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../galerie/Logo.jpg";
import "./Header.css";

const Header = () => {
  const REITER = [
    {
      titel: "Startseite",
      pfad: "/dajanart",
    },
    {
      titel: "Galerie",
      pfad: "/galerie",
    },
    {
      titel: "Kontakt",
      pfad: "/kontakt",
    },
  ];

  return (
    <div className="header">
      {/* <img className="logo" src={logo} alt="Medusa" /> */}
      {REITER.map((item, index) => (
        <div key={item.titel}>
          <NavLink key={item.titel} to={item.pfad}>
            {item.titel}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Header;
