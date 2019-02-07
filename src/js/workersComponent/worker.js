import React, { Component } from 'react';

import Timer from '../timerComponent/timer';
import BasicWorker from './basicWorkerComponent/basicWorker';
import AdvancedWorker from './advancedWorkerComponent/advancedWorker';


class Workers extends Component {

  render() {
    return (
          <div className="workers">
            {this.props.incomes !== 0 ? <Timer /> : null}
            <BasicWorker />
            <AdvancedWorker />
          </div>
    );
  }
}

export default Workers;
