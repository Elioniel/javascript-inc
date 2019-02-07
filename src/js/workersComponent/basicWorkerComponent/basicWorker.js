import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { payClicks } from "../../redux/actions/index";
import { addIncome } from "../../redux/actions/index";
import numberFit from '../../utils/numberFit';

class BasicWorkerRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 1,
      multiplicator : 1,
      cost : 100,
      number : 0
    };
  }

  upgradeWorker = () => {
    if (this.props.clicks >= this.state.cost) {
      this.props.dispatch(payClicks(this.state.cost));
      this.props.dispatch(addIncome(this.state.income * this.state.multiplicator));
      this.setState({
        multiplicator : this.state.multiplicator * 2,
        cost : Math.floor(this.state.cost * 1.75),
        number : this.state.number + 1,
      });
      console.log(this.state, "basicWorkerUpgrade");
    }
    else {
      return;
    }
  }

  render() {

    return (
      <Button large className="white" onClick={this.upgradeWorker}> Upgrade the worker ({numberFit(this.state.cost,2)}) !</Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    totalWorkersNumber: state.totalWorkersNumber
  };
}

const BasicWorker = connect(mapStateToProps)(BasicWorkerRaw);

export default BasicWorker;
