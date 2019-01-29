import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";


export function addIncome(payload) {
  return { type: ADD_INCOME, payload }
};

export function addClicks(payload) {
  return { type: ADD_CLICKS, payload }
};

export function payClicks(payload) {
  return { type: PAY_CLICKS, payload }
};
