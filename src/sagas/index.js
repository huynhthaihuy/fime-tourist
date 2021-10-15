import checkoutSaga from "./checkout";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([
    checkoutSaga(),
  ]);
}