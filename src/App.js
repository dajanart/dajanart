import "./App.css";
import React, { useState } from "react";
import Startseite from "./components/Startseite";
import Galerie from "./components/Galerie";
import Kontakt from "./components/Kontakt";
import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header className="header" />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dajanart" />
          </Route>
          <Route path="/dajanart">
            <Startseite />
          </Route>
          <Route path="/galerie">
            <Galerie />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
