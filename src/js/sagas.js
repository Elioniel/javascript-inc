import { put, takeEvery } from 'redux-saga/effects'

function* sendMessage(action) {
  try {
    const message = action.payload;
    yield window.Materialize.toast(message, 10000);
    yield put({type: "SEND_MESSAGE_SUCCEEDED", message: message});
  }
  catch (e) {
    yield put({type: "SEND_MESSAGE_FAILED", message: e.message});
  }
}


export function* sendMessageSaga() {
  yield takeEvery("SEND_MESSAGE", sendMessage);
}
