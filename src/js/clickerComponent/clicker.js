import React, { Component } from 'react';

import Workers from '../workersComponent/worker'

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks : 100000,
      incomes : 0,
      multiplicator : 1,
      time : 0,
      start : 0,
      income : 0,
      cost : 50
    };
  }

  componentDidMount () {
    console.log(this.state);
  }

  addMoney = () => {
    this.setState({clicks : this.state.clicks + (1 * this.state.multiplicator)});
  }

  upgradeClick = () => {
    if (this.state.clicks >= this.state.cost) {
      this.setState({
        clicks : this.state.clicks -= this.state.cost,
        cost : Math.floor(this.state.cost *= 1.75),
        multiplicator : this.state.multiplicator *= 2
      });
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="game">
        <div className="clicker">
          <div className="centered counter">
            {this.state.clicks}
          </div>
          <div className="centered">
            <button className="click" onClick={this.addMoney}>Click me !</button>
          </div>
        </div>
        <div className="flex">
          <div>
            <button className="click upgrade" onClick={this.upgradeClick}> Upgrade the click ({this.state.cost}) !</button>
          </div>
          <Workers />
        </div>
      </div>
    );
  }
}

export default Clicker;
