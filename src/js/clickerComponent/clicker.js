import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { sendMessage } from "../redux/actions/index";
import { addClicks } from "../redux/actions/index";
import { payClicks } from "../redux/actions/index";

import Workers from '../workersComponent/worker';
import numberFit from '../utils/numberFit';

class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 10,
      multiplicator : 1,
      cost : 50
    };
  }

  componentDidMount = () => {
    this.props.dispatch(sendMessage("Welcome in JavaScript Inc"));
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
      console.log(this.state, "upgradeClick");
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="col s12">
        <div className="col s12">
          <div className="col s12">
            <div className="col s12 m6 l4 offset-l4 offset-m4 centered counter">
            {numberFit(this.props.clicks,2)}
            </div>
          </div>
          <div className="col s12">
            <div className="col s12 m6 l4  offset-l4 offset-m4 centered">
            <Button large className="white" onClick={this.addMoney}>Click me !</Button>
            </div>
          </div>
        </div>
        <div className="col s12 workers">
          <div className="col s12 m6 l4">
            <Button large className="white bouton" onClick={this.upgradeClick}>Up the click ({numberFit(this.state.cost ,2)})</Button>
          </div>
          <Workers incomes={this.props.incomes} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    totalWorkersNumber: state.totalWorkersNumber
  };
}

const Clicker = connect(mapStateToProps)(Clicked);

export default Clicker;
