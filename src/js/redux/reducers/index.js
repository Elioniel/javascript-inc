import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { ADD_WORKER } from "../constants/action-types";
import { ADD_MULTIP } from "../constants/action-types";
import { RED_TICK } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";
import { SEND_MESSAGE } from "../constants/action-types";

const initialState = {
  clicks : 0,
  incomes : 0,
  multiplier : 1,
  tick : 500,
  totalWorkersNumber: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case  ADD_INCOME:
      state.incomes += action.payload;
      return {...state};

    case ADD_CLICKS:
      state.clicks += (action.payload * state.multiplier);
      return {...state};

    case ADD_WORKER:
      state.totalWorkersNumber += action.payload;
      return {...state};

    case ADD_MULTIP:
      state.multiplier *= action.payload;
      return {...state};

      case RED_TICK:
        state.tick -= action.payload;
        return {...state};

    case PAY_CLICKS:
      state.clicks -= action.payload;
      return {...state};

    case SEND_MESSAGE:
      return {...state};

    default:
      break;
  }
  return state;
};

export default rootReducer;
