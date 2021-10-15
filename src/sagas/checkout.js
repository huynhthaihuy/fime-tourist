import { all, takeEvery, put } from "redux-saga/effects";
import { checkoutActions } from "@actions";
import { firestore } from "@library";

const COLLECTION_NAME = "billInfo";

function* storeIntoFirestore({ payload }) {
  const { data } = payload;
  try {
    yield firestore.firestore().collection(COLLECTION_NAME).add(data);
  } catch (error) {
    yield put(checkoutActions.saveBillInfoError(error));
  }
}
export default function* checkoutSaga() {
  yield all([
    takeEvery(checkoutActions.SAVE_BILL_INFO, storeIntoFirestore)
  ]);
}