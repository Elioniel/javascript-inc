import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { payClicks } from "../../redux/actions/index";
import { addIncome } from "../../redux/actions/index";
import { addThirdWorker } from "../../redux/actions/index";

import numberFit from '../../utils/numberFit';

class ThirdWorkerRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 1000,
      multiplicator : this.props.thirdWorkersNumber + 1,
      cost : 500000,
    };
  }

  componentDidMount = () => {
    if (this.props.thirdWorkersNumber >=1) {
      let cos = this.state.cost;
      for (let i = 1; i <= this.props.thirdWorkersNumber; i++) {
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
      this.props.dispatch(addThirdWorker(1))
      console.log(this.state, "thirdWorkerUpgrade");
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="col s12 m6 l4">
        <Button className="white bouton" large onClick={this.upgradeWorker}>Third worker ({numberFit(this.state.cost,2)}) ({numberFit(this.state.multiplicator-1,1)})</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    thirdWorkersNumber: state.thirdWorkersNumber
  };
}

const AdvancedWorker = connect(mapStateToProps)(ThirdWorkerRaw);

export default AdvancedWorker;
