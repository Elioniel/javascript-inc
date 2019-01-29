import React, { Component } from 'react';
import { connect } from "react-redux";

import { payClicks } from "../redux/actions/index";
import { addIncome } from "../redux/actions/index";

import Timer from '../timerComponent/timer';

class WorkersRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 1,
      multiplicator : 1,
      cost : 100
    };
  }

  upgradeWorker = () => {
    if (this.props.clicks >= this.state.cost) {
      this.props.dispatch(payClicks(this.state.cost));
      this.props.dispatch(addIncome(this.state.income * this.state.multiplicator));
      this.setState({
        multiplicator : this.state.multiplicator * 2,
        cost : Math.floor(this.state.cost * 1.75),
      });
      console.log(this.state);
    }
    else {
      return;
    }
  }

  componentDidMount = () => {

  }

  render() {

    let timer = null;
    if (this.props.incomes !== 0) {
      timer = <Timer />
    }

    return (
          <div>
            {timer}
            <button className="click upgrade" onClick={this.upgradeWorker}> Upgrade the worker ({this.state.cost}) !</button>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes
  };
}

const Workers = connect(mapStateToProps)(WorkersRaw);

export default Workers;
