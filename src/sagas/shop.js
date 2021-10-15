import { all, takeEvery, put } from "redux-saga/effects";
import { shopActions } from "@actions";
import { firestore } from "@library";

const COLLECTION_NAME = "ShopItem";

function* storeIntoFirestore({ payload }) {
  const { data } = payload;
  try {
    yield firestore.firestore().collection(COLLECTION_NAME).add(data);
  } catch (error) {
    yield put(shopActions.addToCartError(error));
  }
}
export default function* shopSaga() {
  yield all([
    takeEvery(shopActions.ADD_TO_CART, storeIntoFirestore)
  ]);
}