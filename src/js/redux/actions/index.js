import { ADD_INCOME } from "../constants/action-types";

export function addWorker(payload) {
  return { type: ADD_INCOME, payload }
};
