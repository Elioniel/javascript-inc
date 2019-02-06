import React, { Component } from 'react';
import { connect } from "react-redux";
import { SideNavItem } from "react-materialize"

import numberFit from '../utils/numberFit';

class AchievementsRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMilestone : 1000000,
    };
  }

  componentDidMount = () => {
    this.disabled();
    this.acquire();
  }

  disabled = () => {
    var tab = document.querySelectorAll('.disabled');
    for (var i = 0; i < tab.length; i++) {
      tab[i].children[0].className = "disabled cursorDis";
    }
  }

  acquire = () => {
    var tab = document.querySelectorAll('.acquire');
    for (var i = 0; i < tab.length; i++) {
      tab[i].children[0].className = "acquire";
    }
  }

  render() {
    return (
        <div id="achievements">
          <SideNavItem divider />
          <SideNavItem subheader>Achievements</SideNavItem>
          <SideNavItem onChange={this.acquire()} className={this.props.clicks >= this.state.firstMilestone ? "acquire" : "disabled"} waves icon='developer_mode'>First milestone (get {numberFit(this.state.firstMilestone,0)})</SideNavItem>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    tick: state.tick
  };
}

const Achievements = connect(mapStateToProps)(AchievementsRaw);

export default Achievements;
