import React, { Component } from 'react';

import Timer from './timerComponent/timer';
import BasicWorker from './basicWorkerComponent/basicWorker';
import AdvancedWorker from './advancedWorkerComponent/advancedWorker';
import ThirdWorker from './thirdWorkerComponent/thirdWorker';


class Workers extends Component {

  render() {
    return (
          <div className="workers">
            {this.props.incomes !== 0 ? <Timer /> : null}
            <BasicWorker />
            <AdvancedWorker />
            <ThirdWorker />
          </div>
    );
  }
}

export default Workers;
