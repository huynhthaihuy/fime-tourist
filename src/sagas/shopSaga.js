import { all, takeEvery, takeLatest, put } from "redux-saga/effects";
import { firestore } from "@library";
import { shopActions } from "@actions";



function* addItemToCartList({ payload }) {
    try {
        const { data } = payload;
        console.log("call");
        console.log(data);
        yield firestore.firestore().collection("cartList").add(data);
        yield put(shopActions.addItemToCartSuccess(data.isAddItemSuccess));
    } catch (error) {
        yield put(shopActions.addItemToCartError(error));
    }
}


export default function* shopSaga() {
    yield all([
        takeEvery(shopActions.ADD_ITEM_TO_CART, addItemToCartList),
    ]);
}