import React, { Component } from 'react';
import { connect } from "react-redux";
import { SideNavItem } from "react-materialize"

import numberFit from '../utils/numberFit';

import { sendMessage } from "../redux/actions/index";

class AchievementsRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAcquired : 0,
      firstMilestone : {
        label: "First Milestone",
        cost: 1000000
      },
      secondMilestone : {
        label: "Second Milestone",
        cost: 1000000
      },
    };
  }

  componentDidMount = () => {

  }

  render() {

    var tab = document.querySelectorAll('li.disabled');
    console.log(tab);
    for (var i = 0; i < tab.length; i++) {
      if (tab.length) {
        tab[i].children[0].className = "disabled cursorDis";
      }
    }
    var tabOK = document.querySelectorAll('li.acquire');
    console.log(tabOK);
    for (var j = 0; j < tabOK.length; j++) {
      if (tabOK.length) {
        tabOK[i].children[0].className = "acquire";
      }
    }

    if(this.state.totalAcquired < tabOK.length) {
      this.props.dispatch(sendMessage("Achievement Unlocked"));
      this.setState({
        totalAcquired : this.state.totalAcquired +1,
      });
      console.log(this.state);
    }

    return (
        <div id="achievements">
          <SideNavItem divider />
          <SideNavItem subheader>Achievements</SideNavItem>
          <div>
            <SideNavItem className={this.props.clicks >= this.state.firstMilestone.cost ? "acquire" : "disabled"} waves icon='developer_mode'>{this.state.firstMilestone.label} (get {numberFit(this.state.firstMilestone.cost,0)})</SideNavItem>
          </div>
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
