import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { payClicks } from "../../redux/actions/index";
import { addIncome } from "../../redux/actions/index";
import numberFit from '../../utils/numberFit';

class AdvancedWorkerRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 100,
      multiplicator : 1,
      cost : 5000,
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
      <div className="col s12 m6 l4">
        <Button className="white bouton" large onClick={this.upgradeWorker}>Advanced worker ({numberFit(this.state.cost,2)}) ({numberFit(this.state.number,1)})</Button>
      </div>
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

const AdvancedWorker = connect(mapStateToProps)(AdvancedWorkerRaw);

export default AdvancedWorker;
