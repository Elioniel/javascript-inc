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
import { ACHIEVE } from "../constants/action-types";
import { UPGRADE } from "../constants/action-types";
import { SAVE_GAME } from "../constants/action-types";

export function addIncome(payload) {
  return { type: ADD_INCOME, payload }
};

export function addClicks(payload) {
  return { type: ADD_CLICKS, payload }
};

export function addClickUpgrade(payload) {
  return { type: ADD_CLICK_UPGRADE, payload }
};

export function addBasicWorker(payload) {
  return { type: ADD_BASIC_WORKER, payload }
};

export function addAdvancedWorker(payload) {
  return { type: ADD_ADVANCED_WORKER, payload }
};

export function addMultip(payload) {
  return { type: ADD_MULTIP, payload }
};

export function addBitcoin(payload) {
  return { type: ADD_BITCOIN, payload }
};

export function redTick(payload) {
  return { type: RED_TICK, payload }
};

export function payClicks(payload) {
  return { type: PAY_CLICKS, payload }
};

export function sendMessage(payload) {
  return { type: SEND_MESSAGE, payload }
};

export function rebirth(payload) {
  return { type: REBIRTH, payload }
};

export function achieve(payload) {
  return { type: ACHIEVE, payload }
};

export function upgrade(payload) {
  return { type: UPGRADE, payload }
};

export function saveGame(payload) {
  return { type: SAVE_GAME, payload }
};
