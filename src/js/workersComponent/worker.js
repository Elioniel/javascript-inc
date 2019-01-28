import React, { Component } from 'react';

import Clicker from '../clickerComponent/clicker'

class Workers extends Component {
  constructor(props) {
    super(props);
    this.data = new Clicker();
    this.state = {
      income : 1,
      multiplicator : this.data.state.multiplicator,
      time : this.data.state.time,
      start : this.data.state.start,
      cost : 100
    };

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start,
      clicks : this.data.state.clicks += this.data.state.income,
    }), 500);
  }

  stopTimer = () => {
    this.setState({isOn: false});
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({time: 0, isOn: false});
  }

  upgradeWorker = () => {
    console.log(this.data.state, this.data.state.income);
    if (this.data.state.clicks >= this.data.state.cost) {
      this.setState({
        clicks : this.data.state.clicks -= this.state.cost,
        multiplicator : this.state.multiplicator *= 2,
        income : this.data.state.income += (this.state.income *= this.state.multiplicator),
        cost : Math.floor(this.state.cost *= 1.75),
      });
    }
    else {
      return;
    }
  }

  componentDidMount = () => {
    this.startTimer();
  }

  componentWillUnmount = () => {
    this.stopTimer();
  }

  render() {
    return (
          <div>
            <button className="click upgrade" onClick={this.upgradeWorker}> Upgrade the worker ({this.state.cost}) !</button>
          </div>
    );
  }
}

export default Workers;
