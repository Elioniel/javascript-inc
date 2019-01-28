import React, { Component } from 'react';

import Clicker from './clickerComponent/clicker';

import logo from '.././assets/JavaScript-INC.svg';
import '.././css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo"><img alt="The app logo" src={logo} /></div>
        <Clicker />
      </div>
    );
  }
}

export default App;
