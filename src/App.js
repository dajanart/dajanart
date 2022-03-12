import "./App.css";
import React, { useState } from "react";
import Startseite from "./components/Startseite";
import Gallerie from "./components/Gallerie";
import Kontakt from "./components/Kontakt";
import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header className="header" />
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dajanart" />
          </Route>
          <Route path="/dajanart">
            <Startseite />
          </Route>
          <Route path="/gallerie">
            <Gallerie />
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
