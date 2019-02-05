import { Component } from 'react';
import { connect } from "react-redux";

import { addClicks } from "../redux/actions/index";

class TimerRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn : false,
      time : 0,
      start : 0
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
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start,
      })
      this.props.dispatch(addClicks(this.props.incomes));
    }, this.props.tick);
  }

  stopTimer = () => {
    this.setState({isOn: false});
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({time: 0, isOn: false});
  }

  componentDidMount = () => {
    if (this.props.incomes !== 0) {
      this.startTimer();
    }
  }

  componentWillUnmount = () => {
    this.stopTimer();
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    incomes: state.incomes,
    tick: state.tick
  };
}

const Timer = connect(mapStateToProps)(TimerRaw);

export default Timer;
