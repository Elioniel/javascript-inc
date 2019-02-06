import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, SideNav, SideNavItem } from "react-materialize"

import { payClicks } from "../redux/actions/index";
import { addMultip } from "../redux/actions/index";
import { redTick } from "../redux/actions/index";

import Achievements from '../achievementsComponent/achievements';
import numberFit from '../utils/numberFit';

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

  multiply = () => {
    if (this.props.clicks >= this.state.multiply.cost) {
      this.props.dispatch(payClicks(this.state.multiply.cost));
      this.setState({
        multiply: {
          cost : Math.floor(this.state.multiply.cost * 10),
        }
      });
      this.props.dispatch(addMultip(2))
      console.log(this.state);
    }
    else {
      return;
    }
  }

  quicken = () => {
    if ((this.props.clicks >= this.state.quicken.cost) && this.props.tick >=100) {
      this.props.dispatch(payClicks(this.state.quicken.cost));
      this.setState({
        quicken: {
          cost : Math.floor(this.state.quicken.cost * 15),
        }
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
      <SideNav trigger={<Button floating className='white' waves='light' icon="keyboard_arrow_left" style={{position: 'absolute',bottom: '45px', right: '24px'}}></Button>} options={{ closeOnClick: false, edge: 'right' }}>
        <SideNavItem subheader>Upgrades</SideNavItem>
        <SideNavItem waves icon='developer_mode'>Start developping</SideNavItem>
        <SideNavItem waves icon='query_builder' onClick={ this.quicken }>Quicken the time ({numberFit(this.state.quicken.cost,2)})</SideNavItem>
        <SideNavItem waves icon='plus_one' onClick={ this.multiply }>Multiply ({numberFit(this.state.multiply.cost,2)})</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Already Buyed</SideNavItem>
        <SideNavItem className="acquired" waves icon='query_builder'>The right to play</SideNavItem>
        <Achievements />
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
