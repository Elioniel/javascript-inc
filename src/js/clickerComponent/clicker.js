import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { addClicks } from "../redux/actions/index";
import { payClicks } from "../redux/actions/index";

import Workers from '../workersComponent/worker';

class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 10,
      multiplicator : 1,
      cost : 50
    };
  }

  addMoney = () => {
    let click = this.state.income * this.state.multiplicator;
    this.props.dispatch(addClicks(click));
  }

  upgradeClick = () => {
    if (this.props.clicks >= this.state.cost) {
      this.props.dispatch(payClicks(this.state.cost));
      this.setState({
        cost : Math.floor(this.state.cost * 1.75),
        multiplicator : this.state.multiplicator * 2
      });
      console.log(this.state);
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
            {this.props.clicks}
          </div>
          <div className="centered">
            <Button large className="white" onClick={this.addMoney}>Click me !</Button>
          </div>
        </div>
        <div className="flex">
          <div>
            <Button large className="white" onClick={this.upgradeClick}> Upgrade the click ({this.state.cost}) !</Button>
          </div>
          <Workers />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    totalWorkersNumber: state.totalWorkersNumber
  };
}

const Clicker = connect(mapStateToProps)(Clicked);

export default Clicker;
