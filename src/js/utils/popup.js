import React, { Component } from 'react';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setTimer : 0,
      text : ""
    }
  }


  render(prop) {
    return (
      <div class="popup centered">
        {this.state.text}
      </div>
    );
  }
}

export default Popup;
