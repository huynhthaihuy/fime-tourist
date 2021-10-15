import { cartActions } from "@actions";
const initState = {
    isGetItemSuccess: false,
    isDeleteItemSuccess: false,
    isUpdateItemSuccess: false,
    cartItems: [],
    cartItem: {
        id : "",
        name: "",
        description: "",
        src: "",
        price: "",
        quantity: 1,
        total: "",
    },
    totalPrice : "",
};
function cartReducer(state = initState, action) {
    switch (action.type) {
        case cartActions.GET_ITEM_SUCCESS: {
            return {
                ...state,
                isGetItemSuccess : true,
                cartItems: action.payload,
            };
        }
        case cartActions.GET_ITEM_FAIL: {
            return {
                ...state,
                isGetItemSuccess: action.payload,
            };
        }
        case cartActions.DELETE_ITEM: {
            return {
                ...state,
            };
        }
        case cartActions.DELETE_ITEM_SUCCESS: {
            return {
                ...state,
                isDeleteItemSuccess: true,
            };
        }
        case cartActions.DELETE_ITEM_FAIL: {
            return {
                ...state,
                isDeleteItemSuccess: false,
            };
        }
        case cartActions.UPDATE_QUANTITY_ITEM: {
            return {
                ...state,
                cartItem: action.payload
            };
        }
        case cartActions.UPDATE_QUANTITY_ITEM_SUCCESS: {
            return {
                ...state,
                isUpdateItemSuccess: true,
            };
        }
        case cartActions.POST_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice : action.payload
            };
        }

        default: {
            return state;
        }
    };
};
export default cartReducer;