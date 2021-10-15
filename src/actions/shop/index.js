const shopActions = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    ADD_ITEM_TO_CART_SUCCESS : "ADD_ITEM_TO_CART_SUCCESS",
    ADD_ITEM_TO_CART_ERROR : "ADD_ITEM_TO_CART_ERROR",
    addItemToCart: (data) => ({
        type: shopActions.ADD_ITEM_TO_CART,
        payload : {data}
    }),
    addItemToCartSuccess: (data) => ({
        type: shopActions.ADD_ITEM_TO_CART_SUCCESS,
        payload : {data}
    }),
    addItemToCartError: (err) => ({
        type: shopActions.ADD_ITEM_TO_CART_ERROR,
        payload : {err}
    }),
   

};
export default shopActions;
