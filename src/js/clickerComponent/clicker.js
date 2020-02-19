import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { addClicks } from "../redux/actions/index";
import { payClicks } from "../redux/actions/index";
import { addClickUpgrade } from "../redux/actions/index";
import { sendMessage } from "../redux/actions/index";
import { saveGame } from '../redux/actions/index'

import Workers from '../workersComponent/worker';
import numberFit from '../utils/numberFit';

//Classe du composant Clicked
class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income : 10,
      multiplicator : this.props.clickUpgradeNumber + 1,
      cost : 50
    };
  }

  // Le composant c'est bien initialisé et est monté dans le DOM
  componentDidMount = () => {
    //Envoyer le message de bienvenue
    this.props.dispatch(sendMessage("Welcome in JavaScript Inc"));
    // Si le nombre d'upgrade du click est supérieur ou égal à 1, remettre le multiplicateur du click
    if (this.props.clickUpgradeNumber >=1) {
      let cos = this.state.cost;
      for (let i = 1; i <= this.props.clickUpgradeNumber; i++) {
          cos = Math.floor(cos * 1.75)
      }
      this.setState({
        cost : cos
      });
    }
    // Lancer la routine de sauvegarde de l'état du jeu a un intérval défini a la fin du SetInterval
    this.Save = setInterval(() => {
      try {
        this.props.dispatch(saveGame(this.props.state));
      }
      catch (e) {
        console.log(e);
      }
    }, 30000);
  }

  // Ajoute des click au compte du jeu
  addMoney = () => {
    let click = this.state.income * (this.state.multiplicator * 2);
    this.props.dispatch(addClicks(click));
  }

  // Améliore le click manuel pour le rendre plus efficace
  upgradeClick = () => {
    if (this.props.clicks >= this.state.cost) {
      this.props.dispatch(payClicks(this.state.cost));
      this.setState({
        cost : Math.floor(this.state.cost * 1.75),
        multiplicator : this.state.multiplicator + 1,
      });
      this.props.dispatch(addClickUpgrade(1))
      console.log(this.state, "upgradeClick");
    }
    else {
      return;
    }
  }

  // Lance le rendu du jeu avec les parties du nombre de clicks, du bouton et de l'upgrade des clicks ainsi que les workers
  render() {
    return (
      <div className="col s12">
        <div className="col s12">
          <div className="col s12">
            <div className="col s12 m6 l4 offset-l4 offset-m4 centered counter">
            {numberFit(this.props.clicks,2)}
            </div>
          </div>
          <div className="col s12">
            <div className="col s12 m6 l4  offset-l4 offset-m4 centered">
            <Button large className="white" onClick={this.addMoney}>Click me !</Button>
            </div>
          </div>
        </div>
        <div className="col s12 workers">
          <div className="col s12 m6 l4">
            <Button large className="white bouton" onClick={this.upgradeClick}>Up the click ({numberFit(this.state.cost ,2)}) ({numberFit(this.state.multiplicator-1 ,2)})</Button>
          </div>
          <Workers incomes={this.props.incomes} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 // console.log('state', state);
  return {
    clicks: state.clicks,
    incomes: state.incomes,
    clickUpgradeNumber: state.clickUpgradeNumber,
    state: state
  };
}

const Clicker = connect(mapStateToProps)(Clicked);

export default Clicker;
