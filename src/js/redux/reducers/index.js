import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";

const initialState = {
  clicks : 0,
  incomes : 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INCOME) {
      state.incomes += action.payload;
    return Object.assign({}, state);
  }
  if (action.type === ADD_CLICKS) {
      state.clicks += action.payload;
    return Object.assign({}, state);
  }
  if (action.type === PAY_CLICKS) {
      state.clicks -= action.payload;
    return Object.assign({}, state);
  }
  return state;
};

export default rootReducer;
