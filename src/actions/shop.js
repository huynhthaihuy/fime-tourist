const shopActions = {
    ADD_TO_CART: "ADD_TO_CART",
    ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
    ADD_TO_CART_ERROR: "ADD_TO_CART_ERROR",

    addToCart: (payload) => ({
        type: shopActions.ADD_TO_CART,
        payload
    }),

    addToCartSuccess: data => ({
        type: shopActions.ADD_TO_CART_SUCCESS,
        payload: { data },
    }),

    addToCartError: error => ({
        type: shopActions.ADD_TO_CART_ERROR,
        payload: { error },
    }),
};

export default shopActions;