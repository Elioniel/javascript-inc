import { ADD_INCOME } from "../constants/action-types";

const initialState = {
  clicks : 100000,
  incomes : 0,
  multiplicator : 1,
  time : 0,
  start : 0,
  income : 0,
  cost : 50
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INCOME) {
    return Object.assign({}, state, {
      state: state += action.payload
    });
  }
  return state;
};

export default rootReducer;
