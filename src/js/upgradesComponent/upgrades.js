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
        cost : 100000,
        number : 0,
        maxi : 15,
      },
      quicken: {
        cost : 100000,
        number : 0,
        maxi : 8
      }
    };
  }

  multiply = () => {
    if ((this.props.clicks >= this.state.multiply.cost) && (this.state.multiply.number < this.state.multiply.maxi)) {
      this.props.dispatch(payClicks(this.state.multiply.cost));
      this.setState({
        multiply: {
          cost : Math.floor(this.state.multiply.cost * 10),
          number : this.state.multiply.number + 1,
          maxi : this.state.multiply.maxi
        }
      });
      this.props.dispatch(addMultip(2))
      // console.log(this.state, "multip");
    }
    else {
      // console.log(this.state, "Rmultip");
      return;
    }
  }

  quicken = () => {
    if ((this.props.clicks >= this.state.quicken.cost) && (this.state.quicken.number < this.state.quicken.maxi)) {
      this.props.dispatch(payClicks(this.state.quicken.cost));
      this.setState({
        quicken: {
          cost : Math.floor(this.state.quicken.cost * 15),
          number : this.state.quicken.number + 1,
          maxi : this.state.quicken.maxi
        }
      });
      this.props.dispatch(redTick(50))
      // console.log(this.state, "quick");
    }
    else {
      // console.log(this.state, "Rquick");
      return;
    }
  }

  render() {
    var dest = document.querySelector('div.bougth');
    var qui = document.querySelector('div.available');
    if(dest) {
      var info = dest.querySelector('span.info');
    }
    if (this.state.quicken.number === this.state.quicken.maxi) {
      if (qui.querySelector('li.quicken')) {
        dest.appendChild(qui.querySelector('li.quicken'))
      }
    }
    if (this.state.multiply.number === this.state.multiply.maxi) {
      if (qui.querySelector('li.multip')) {
        dest.appendChild(qui.querySelector('li.multip'))
      }
    }
    if(info) {
      info.className = "hidden";
    }
    // console.log(dest, "2");
    // console.log(qui, "2");
    // console.log(info, "2");
    return (
      <SideNav trigger={<Button floating className='white' waves='light' icon="keyboard_arrow_left" style={{position: 'fixed',bottom: '45px', right: '24px'}}></Button>} options={{ closeOnClick: false, edge: 'right' }}>
        <div className="available">
          <SideNavItem subheader>Upgrades</SideNavItem>
          <SideNavItem waves icon='developer_mode'>Start developping</SideNavItem>
          <SideNavItem className="quicken" waves icon='query_builder' onClick={ this.quicken }>Quicken the time <span className="info">({numberFit(this.state.quicken.cost,2)}) {this.state.quicken.number}/{this.state.quicken.maxi}</span></SideNavItem>
          <SideNavItem className="multip" waves icon='plus_one' onClick={ this.multiply }>Multiply <span className="info">({numberFit(this.state.multiply.cost,2)})  {this.state.multiply.number}/{this.state.multiply.maxi}</span></SideNavItem>
        </div>
        <SideNavItem divider />
        <div className="bougth">
          <SideNavItem subheader>Already Buyed</SideNavItem>
          <SideNavItem className="acquired" waves icon='query_builder'>The right to play</SideNavItem>
        </div>
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
