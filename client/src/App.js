import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//custom components and containers
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <h1>Djello - The Trello Clone</h1>
        <p>A project by Steven Li. Check out the source code at stevenli.me</p>
        <Board />
      </div>
    );
  }
}

export default App;
