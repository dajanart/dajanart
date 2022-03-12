import "./App.css";
import Startseite from "./components/Startseite";
import Gallerie from "./components/Gallerie";
import Kontakt from "./components/Kontakt";
import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header className="header" />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/startseite" />
          </Route>
          <Route path="/startseite">
            <Startseite />
          </Route>
          <Route path="/gallerie">
            <Gallerie />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
