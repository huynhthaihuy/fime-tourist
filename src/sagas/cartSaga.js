import { all, takeEvery, takeLatest, put } from "redux-saga/effects";
import { firestore } from "@library";
import { cartActions } from "@actions";


function* updateCartIntoFiresStore({ payload }) {
    try {
        const { data } = payload;

        yield firestore.firestore().collection("cartList").doc(data.id).update({
            quantity: data.quantity,
            total: data.total
        });
        yield put(cartActions.updateCartQuantityItemSuccess());
    } catch (error) {
        yield put(cartActions.updateCartQuantityError(error));
    }
}

function* getListCartItemFromFiresStore() {
    try {
        const payload = [];
        const data = yield firestore.firestore().collection("cartList").get();
        data.forEach(doc => {
            let temp = doc.data();
            temp["id"] = doc.id;
            payload.push(temp);
        });
        yield put(cartActions.getItemSuccess(payload));
    } catch (error) {
        yield put(cartActions.getItemFail(error));
    }
}
function* deleteCartItemFromFiresStore({ payload }) {
    try {
        const { data } = payload;
        yield firestore.firestore().collection("cartList").doc(data.id).delete();
        yield put(cartActions.deleteCartItemSuccess(data.isDeleteItemSuccess));
    } catch (error) {
        yield put(cartActions.updateCartQuantityError(error));
    }
}

export default function* cartSaga() {
    yield all([
        takeEvery(cartActions.UPDATE_QUANTITY_ITEM, updateCartIntoFiresStore),
        takeLatest(cartActions.GET_ITEM, getListCartItemFromFiresStore),
        takeEvery(cartActions.DELETE_ITEM, deleteCartItemFromFiresStore),
    ]);
}