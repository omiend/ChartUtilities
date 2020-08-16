import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Trigonometric from "./Trigonometric/index";
import Tier from "./Tier/index";

import "destyle.css";
import "./css/main.css";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trigonometric">Trigonometric</Link>
            </li>
            <li>
              <Link to="/tier">Tierd Priching</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/trigonometric">
            <Trigonometric />
          </Route>
          <Route path="/tier">
            <Tier />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
