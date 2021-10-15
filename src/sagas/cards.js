import { cardActions } from "@actions";
import { db } from "../library/firestore/firebase";
import { all, takeEvery, put, call, takeLastest } from "redux-saga/effects";
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
    console.log("Success");
    console.log(data);
  } catch (error) {
    console.log("error");
    yield put(cardActions.getCardFailure(error));
  }
}

// function* getListCardItemFromFiresStore() {
//   try {
//     const payload = [];
//     const data = yield db.firestore().collection("cardInfo").get();
//     data.forEach((doc) => {
//       let temp = doc.data();
//       temp["id"] = doc.id;
//       payload.push(temp);
//     });
//     yield put(cardActions.getCardSuccess(payload));
//   } catch (error) {
//     yield put(cardActions.getCardFail(error));
//   }
// }
function* deleteCardItemFromFiresStore({ payload }) {
  try {
    const { data } = payload;
    console.log(data);
    yield firestore.firestore().collection("cardInfo").doc(data).delete();
    yield put(cardActions.deleteCardSuccess());
  } catch (error) {
    yield put(cardActions(error));
  }
}

export default function* cardSaga() {
  yield all([
    takeEvery(cardActions.GET_CARD_REQUEST, fetchCardRequest),
    takeEvery(cardActions.DELETE_CARD, deleteCardItemFromFiresStore),
  ]);
}
