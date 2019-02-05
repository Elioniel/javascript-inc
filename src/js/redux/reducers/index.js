import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";

const initialState = {
  clicks : 0,
  incomes : 0,
  totalWorkersNumber: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case  ADD_INCOME:
      state.incomes += action.payload;
      return {...state};

    case ADD_CLICKS:
      state.clicks += action.payload;
      return {...state};

    case PAY_CLICKS:
      state.clicks -= action.payload;
      return {...state};

    default:
      break;
  }
  return state;
};

export default rootReducer;
