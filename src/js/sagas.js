import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'

function* sendMessage(action) {
  try {
    const message = action.payload;
    yield window.Materialize.toast(message, 3000);
    yield put({type: "SEND_MESSAGE_SUCCEEDED", message: message});
  }
  catch (e) {
    yield put({type: "SEND_MESSAGE_FAILED", message: e.message});
  }
}


export function* sendMessageSaga() {
  yield takeEvery("SEND_MESSAGE", sendMessage);
}

function* saveGame(action) {
  try {
    const message = "Saving game ..."
    yield localStorage.setItem("JavaScriptInc", JSON.stringify(action.payload));
    yield window.Materialize.toast(message, 3000);
    yield put({type: "SAVE_GAME_SUCCEEDED", message: message});
  }
  catch (e) {
    yield put({type: "SAVE_GAME_FAILED", message: e.message});
  }
}


export function* saveGameSaga() {
  yield takeLatest("SAVE_GAME", saveGame);
}

export default function* rootSaga() {
  yield all([
    saveGameSaga(),
    sendMessageSaga()
  ])
}
