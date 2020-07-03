import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";
import "./App.css";

import Navigation from "./components/Navigation";

import Project from "./components/Project";
import NewTheme from "./components/NewTheme";
import NewLayout from "./components/NewLayout";
import NewProduct from "./components/NewProduct";


// For package.json
axios.defaults.baseURL = "https://us-central1-editor-c70eb.cloudfunctions.net/api"
// "homepage": "https://editor-c70eb.web.app/"

axios.defaults.baseURL = "http://localhost:5000/editor-c70eb/us-central1/api"


class App extends Component {

  render() {
    return (


      <Router>

        <div className="App">
          <Navigation />

          <Switch>

            <Route exact path="/">
              <Project />
            </Route>

            <Route exact path="/creeazaLayout">
              <NewLayout />
            </Route>

            <Route exact path="/creeazaTematica">
              <NewTheme />
            </Route>

            <Route exact path="/creeazaProdusComplet">
              <NewProduct />
            </Route>

          </Switch>
        </div>

      </Router>


    );
  }
}

export default App;
