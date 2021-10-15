import { all } from "@redux-saga/core/effects";
import cardSaga from "./cards";
export default function* rootSaga() {
  yield all([cardSaga()]);
}
