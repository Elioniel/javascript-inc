import React, { Component } from 'react';

import Timer from '../timerComponent/timer';
import BasicWorker from './basicWorkerComponent/basicWorker';


class Workers extends Component {

  render() {
    return (
          <div>
            {this.props.incomes !== 0 ? <Timer /> : null}
            <BasicWorker />
          </div>
    );
  }
}

export default Workers;
