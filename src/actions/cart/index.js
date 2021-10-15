const cartActions = {
    GET_ITEM: "GET_ITEM",
    GET_ITEM_SUCCESS: "GET_ITEM_SUCCESS",
    GET_ITEM_FAIL: "GET_ITEM_FAIL",

    DELETE_ITEM: "DELETE_ITEM",
    DELETE_ITEM_FAIL: "DELETE_ITEM_FAIL",
    DELETE_ITEM_SUCCESS: "DELETE_ITEM_SUCCESS",

    UPDATE_QUANTITY_ITEM: "UPDATE_QUANTITY_ITEM",
    UPDATE_QUANTITY_ITEM_SUCCESS: "UPDATE_QUANTITY_ITEM_SUCCESS",
    UPDATE_QUANTITY_ITEM_ERROR: "UPDATE_QUANTITY_ITEM_ERROR",

    POST_TOTAL_PRICE: "POST_TOTAL_PRICE",

    getItem: () => ({
        type: cartActions.GET_ITEM,
    }),
    getItemSuccess: (data) => ({
        type: cartActions.GET_ITEM_SUCCESS,
        payload: { data }
    }),
    getItemFail: (error) => ({
        type: cartActions.GET_ITEM_FAIL,
        payload: { error }
    }),
    deleteCartItem: (data) => ({
        type: cartActions.DELETE_ITEM,
        payload: { data }
    }),
    deleteCartItemSuccess: () => ({
        type: cartActions.DELETE_ITEM_SUCCESS,
    }),
    deleteCartItemFail: () => ({
        type: cartActions.DELETE_ITEM_FAIL,
    }),
    updateQuantityItem: (data) => ({
        type: cartActions.UPDATE_QUANTITY_ITEM,
        payload: { data },
    }),
    updateCartQuantityItemSuccess: () => ({
        type: cartActions.UPDATE_QUANTITY_ITEM_SUCCESS,
    }),
    updateCartQuantityError: error => ({
        type: cartActions.UPDATE_QUANTITY_ITEM_ERROR,
        payload: { error },
    }),

    postTotalPrice: (data) => ({
        type: cartActions.POST_TOTAL_PRICE,
        payload: { data }
    }),

};
export default cartActions;
