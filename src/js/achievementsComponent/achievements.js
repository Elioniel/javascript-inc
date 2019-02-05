import React, { Component } from 'react';
import { connect } from "react-redux";
import { SideNavItem } from "react-materialize"

class AchievementsRaw extends Component {

  render() {
    return (
        <div>
        <SideNavItem divider />
          <SideNavItem subheader>Achievements</SideNavItem>
          <SideNavItem waves icon='developer_mode'>Start developping</SideNavItem>
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
