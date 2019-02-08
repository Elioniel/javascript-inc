import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { ADD_CLICK_UPGRADE } from "../constants/action-types";
import { ADD_BASIC_WORKER } from "../constants/action-types";
import { ADD_ADVANCED_WORKER } from "../constants/action-types";
import { ADD_MULTIP } from "../constants/action-types";
import { ADD_BITCOIN } from "../constants/action-types";
import { RED_TICK } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";
import { SEND_MESSAGE } from "../constants/action-types";
import { REBIRTH } from "../constants/action-types";
import { SAVE_GAME } from "../constants/action-types";

const inistate = {
    clicks : 0,
    incomes : 0,
    multiplier : 1,
    tick : 500,
    clickUpgradeNumber:0,
    basicWorkersNumber: 0,
    advancedWorkersNumber: 0,
    bitcoins : 0,
    rebirth : 0
  };

const initialState = localStorage.getItem("JavaScriptInc") ? JSON.parse(localStorage.getItem("JavaScriptInc")) : inistate;

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case  ADD_INCOME:
      state.incomes += action.payload;
      return {...state};

    case ADD_CLICKS:
      state.clicks += (action.payload * state.multiplier);
      return {...state};

    case ADD_CLICK_UPGRADE:
      state.clickUpgradeNumber += action.payload;
      return {...state};

    case ADD_BASIC_WORKER:
      state.basicWorkersNumber += action.payload;
      return {...state};

    case ADD_ADVANCED_WORKER:
      state.advancedWorkersNumber += action.payload;
      return {...state};

    case ADD_MULTIP:
      state.multiplier *= action.payload;
      return {...state};

    case ADD_BITCOIN:
      state.bitcoins += action.payload;
      return {...state};

    case RED_TICK:
      state.tick -= action.payload;
      return {...state};

    case PAY_CLICKS:
      state.clicks -= action.payload;
      return {...state};

    case SEND_MESSAGE:
      return {...state};

    case REBIRTH:
      let bitcoin = state.bitcoins, restart = state.rebirth +=1;
      state = initialState;
      state.bitcoins = bitcoin;
      state.restart = restart;
      return {...state};

    case SAVE_GAME:
      return {...state};


    default:
      break;
  }
  return state;
};

export default rootReducer;
