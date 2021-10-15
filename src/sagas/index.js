import checkoutSaga from "./checkout";
import cartSaga from "./cartSaga";
import cardSaga from "./cards";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([checkoutSaga(), cartSaga(), cardSaga()]);
}
