import React, { Component } from 'react';
import { connect } from "react-redux";
import { SideNavItem } from "react-materialize"

import numberFit from '../../utils/numberFit';

import { sendMessage } from "../../redux/actions/index";

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
        cost: 10000000
      },
    };
  }

  componentDidMount = () => {

  }

  render() {

    var tab = document.querySelectorAll('li.disabled');
    // console.log(tab, 'tab');
    for (let i = 0; i < tab.length; i++) {
      if (tab.length > 0) {
        for (let j = 0; j < tab[i].children.length; j++) {
          if(tab[i].children.length > 0) {
            tab[i].children[j].className = "disabled";
          }
        }
      }
    }
    var tabOK = document.querySelectorAll('li.acquire');
    // console.log(tabOK, 'tabOK');
    for (let k = 0; k < tabOK.length; k++) {
      if (tabOK.length > 0) {
        for (let l = 0; l < tabOK[k].children.length; l++) {
          if(tabOK[k].children.length > 0) {
            tabOK[k].children[l].className = "acquire";
          }
        }
      }
    }

    if(this.state.totalAcquired < tabOK.length) {
      this.props.dispatch(sendMessage("Achievement Unlocked"));
      this.setState({
        totalAcquired : this.state.totalAcquired + 1,
      });
      console.log(this.state, 'achievements');
    }

    return (
        <div id="achievements">
          <SideNavItem divider />
          <SideNavItem subheader>Achievements</SideNavItem>
          <div>
            <SideNavItem className={this.props.clicks >= this.state.firstMilestone.cost ? "acquire" : "disabled"} waves icon='developer_mode'>{this.state.firstMilestone.label} (get {numberFit(this.state.firstMilestone.cost,0)})</SideNavItem>
            <SideNavItem className={this.props.clicks >= this.state.secondMilestone.cost ? "acquire" : "disabled"} waves icon='aspect_ratio'>{this.state.secondMilestone.label} (get {numberFit(this.state.secondMilestone.cost,0)})</SideNavItem>
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
