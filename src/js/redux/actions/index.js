import { ADD_INCOME } from "../constants/action-types";
import { ADD_CLICKS } from "../constants/action-types";
import { ADD_WORKER } from "../constants/action-types";
import { ADD_MULTIP } from "../constants/action-types";
import { RED_TICK } from "../constants/action-types";
import { PAY_CLICKS } from "../constants/action-types";

export function addIncome(payload) {
  return { type: ADD_INCOME, payload }
};

export function addClicks(payload) {
  return { type: ADD_CLICKS, payload }
};

export function addWorker(payload) {
  return { type: ADD_WORKER, payload }
};

export function addMultip(payload) {
  return { type: ADD_MULTIP, payload }
};

export function redTick(payload) {
  return { type: RED_TICK, payload }
};

export function payClicks(payload) {
  return { type: PAY_CLICKS, payload }
};
