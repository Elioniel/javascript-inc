import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { payClicks } from "../../redux/actions/index";
import { addIncome } from "../../redux/actions/index";
import { addBasicWorker } from "../../redux/actions/index";

import numberFit from '../../utils/numberFit';

class BasicWorkerRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 1,
      multiplicator : this.props.basicWorkersNumber + 1,
      cost : 100,
    };
  }

  componentDidMount = () => {
    if (this.props.basicWorkersNumber >=1) {
      let cos = this.state.cost;
      for (let i = 1; i <= this.props.basicWorkersNumber; i++) {
          cos = Math.floor(cos * 1.75)
      }
      this.setState({
        cost : cos
      });
    }
  }

  upgradeWorker = () => {
    if (this.props.clicks >= this.state.cost) {
      this.props.dispatch(payClicks(this.state.cost));
      this.props.dispatch(addIncome(this.state.income * (this.state.multiplicator * 2)));
      this.setState({
        multiplicator : this.state.multiplicator + 1,
        cost : Math.floor(this.state.cost * 1.75),
      });
      this.props.dispatch(addBasicWorker(1))
      console.log(this.state, "basicWorkerUpgrade");
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="col s12 m6 l4">
        <Button className="white bouton" large onClick={this.upgradeWorker}>Basic worker ({numberFit(this.state.cost,2)}) ({numberFit(this.state.multiplicator-1,1)})</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    basicWorkersNumber: state.basicWorkersNumber
  };
}

const BasicWorker = connect(mapStateToProps)(BasicWorkerRaw);

export default BasicWorker;
