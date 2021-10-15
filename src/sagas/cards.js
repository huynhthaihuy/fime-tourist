import { cardActions } from "@actions";
import { db } from "../library/firestore/firebase";
import { all, takeEvery, put, call } from "redux-saga/effects";
import { firestore } from "@library";
const getDocuments = async (collectionName) => {
  return await db
    .collection(collectionName)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
};
function* fetchCardRequest() {
  try {
    const data = yield call(getDocuments, "cardInfo");
    yield put(cardActions.getCardSuccess(data));
  } catch (error) {
    yield put(cardActions.getCardFailure(error));
  }
}

function* addCardItemFromFiresStore({ payload }) {
  const { data } = payload;
  try {
    yield firestore.firestore().collection("cardInfo").add(data);
    yield put(cardActions.addCardSuccess(data.isAddCardSuccess));
  } catch (error) {
    yield put(cardActions.addCardFailure(error));
  }
}

function* deleteCardItemFromFiresStore({ payload }) {
  try {
    const { data } = payload;
    yield firestore.firestore().collection("cardInfo").doc(data.id).delete();
    yield put(cardActions.deleteCardSuccess(data.isDeleteCardSuccess));
  } catch (error) {
    yield put(cardActions(error));
  }
}

export default function* cardSaga() {
  yield all([
    takeEvery(cardActions.GET_CARD_REQUEST, fetchCardRequest),
    takeEvery(cardActions.DELETE_CARD, deleteCardItemFromFiresStore),
    takeEvery(cardActions.ADD_CARD, addCardItemFromFiresStore),
  ]);
}
