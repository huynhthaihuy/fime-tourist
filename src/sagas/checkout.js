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
  finally {
    yield put(checkoutActions.saveBillInfoSuccess(data));
  }
}
function* getOrderItem() {
  try { 
    const payload = [];
     yield firestore.firestore().collection("cartList").get().then((querySnapshot) => {
       querySnapshot.docs.forEach((doc) => {
         payload.push(doc.data());
       });
     });
     yield put(checkoutActions.getOrderItemSuccess(payload));
  } catch (error) {
    yield put(checkoutActions.getOrderItemError(error));
  }
}
export default function* checkoutSaga() {
  yield all([
    takeEvery(checkoutActions.SAVE_BILL_INFO, storeIntoFirestore),
    takeEvery(checkoutActions.GET_ORDER_ITEM, getOrderItem)
  ]);
}