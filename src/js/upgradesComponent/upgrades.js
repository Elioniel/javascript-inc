import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, SideNav, SideNavItem } from "react-materialize"

import { payClicks } from "../redux/actions/index";
import { addMultip } from "../redux/actions/index";
import { redTick } from "../redux/actions/index";

class UpgradesRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiply: {
        cost : 100000
      },
      quicken: {
        cost : 100000
      }
    };
  }

  componentDidMount = () => {

  }

  multiply = () => {
    if (this.props.clicks >= this.state.multiply.cost) {
      this.props.dispatch(payClicks(this.state.multiply.cost));
      this.setState({
        cost : Math.floor(this.state.multiply.cost * 10),
      });
      this.props.dispatch(addMultip(2))
      console.log(this.state);
    }
    else {
      return;
    }
  }

  quicken = () => {
    if (this.props.clicks >= this.state.quicken.cost) {
      this.props.dispatch(payClicks(this.state.quicken.cost));
      this.setState({
        cost : Math.floor(this.state.quicken.cost * 15),
      });
      this.props.dispatch(redTick(50))
      console.log(this.state);
    }
    else {
      return;
    }
  }

  render() {
    return (
      <SideNav trigger={<Button floating className='white' waves='light' icon="keyboard_arrow_left" style={{position: 'absolute',bottom: '45px', right: '24px'}}></Button>} options={{ closeOnClick: true, edge: 'right' }}>
        <SideNavItem subheader>Upgrades</SideNavItem>
        <SideNavItem waves icon='developer_mode'>Start developping</SideNavItem>
        <SideNavItem waves icon='query_builder' onClick={ this.quicken }>Quicken the time ({this.state.quicken.cost})</SideNavItem>
        <SideNavItem waves icon='plus_one' onClick={ this.multiply }>Multiply ({this.state.multiply.cost})</SideNavItem>
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
    incomes: state.incomes,
    tick: state.tick
  };
}

const Upgrades = connect(mapStateToProps)(UpgradesRaw);

export default Upgrades;
