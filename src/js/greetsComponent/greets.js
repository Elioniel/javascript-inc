import React, { Component } from 'react';
import Popup from '../utils/popup'

class Greets extends Component {
  constructor(props) {
    super(props);
    Popup.setText()
  }
  render() {
    return (
      <div className="popup centered">
      </div>
    );
  }
}

export default Greets;
