import { ADD_INCOME } from "../constants/action-types";

const initialState = {
  clicks : 100000,
  incomes : 0,
  income : 0,
  multiplicator : 1,
  time : 0,
  start : 0,
  cost : 50
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INCOME) {
      state.income += action.payload;
    return Object.assign({}, state);
  }
  return state;
};

export default rootReducer;
