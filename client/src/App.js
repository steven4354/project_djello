import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//custom components and containers
import Board from "./components/Board";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          <h1>Djello - The Trello Clone</h1>
          <p>
            A project by Steven Li. Check out the source code at stevenli.me
          </p>
          <Switch>
            <Route exact path="/" component={UserLogin} />
            <Route exact path="/registration" component={UserRegistration} />
            <Route exact path="/board" component={Board} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
