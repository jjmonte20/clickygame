import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pics from "./pics.json";

class App extends Component {

  // state changes depending on the array that is chosen
  state = {
    // setting this.state.whateverIchoosehere
    pics
  }

  // the render portion is what displays on screen
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
