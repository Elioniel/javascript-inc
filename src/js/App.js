import React, { Component } from 'react';

import Clicker from './clickerComponent/clicker';
import Upgrades from './upgradesComponent/upgrades';


import logo from '.././assets/JavaScript-INC.svg';
import '.././css/App.css';

// import store from "./redux/store/index";
// import { addIncome } from "./redux/actions/index";
//
// window.store = store;
// window.addIncome = addIncome;

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="logo col s12"><img className="col s12 m6 offset-m4 l4 offset-l4" alt="The app logo" src={logo} /></div>
        <Clicker />
        <Upgrades />
      </div>
    );
  }
}

export default App;
