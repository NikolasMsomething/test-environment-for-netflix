
import './App.css';
import API from './ApiUtil';
import React, { Component } from 'react'

class App extends Component {
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <button style={{ width: '200px', height: '200px', backgroundColor: 'white'}} onClick={API.request} > I AM A HUGE BUTTON</button>
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
