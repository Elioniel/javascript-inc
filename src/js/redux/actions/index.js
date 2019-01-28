import { ADD_INCOME } from "../constants/action-types";

export function addIncome(payload) {
  return { type: ADD_INCOME, payload }
};
