import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, SideNav, SideNavItem } from "react-materialize"

class UpgradesRaw extends Component {

  componentDidMount = () => {

  }

  render() {
    return (
      <SideNav trigger={<Button floating className='white' waves='light' icon="keyboard_arrow_left" style={{position: 'absolute',bottom: '45px', right: '24px'}}></Button>} options={{ closeOnClick: true, edge: 'right' }}>
        <SideNavItem subheader>Upgrades</SideNavItem>
        <SideNavItem waves icon='developer_mode'>Start developping</SideNavItem>
        <SideNavItem waves icon='query_builder'>Quicken the time</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Already Buyed</SideNavItem>
        <SideNavItem waves icon='query_builder' >The right to play</SideNavItem>
      </SideNav>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    incomes: state.incomes
  };
}

const Upgrades = connect(mapStateToProps)(UpgradesRaw);

export default Upgrades;
