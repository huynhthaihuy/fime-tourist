import { shopActions } from "@actions";
const initState = {
    isGetItemSuccess: false,
    isAddItemSuccess : false,
    shopItems: [],
    shopItem: {
        id : "",
        name: "",
        description: "",
        src: "",
        price: "",
        quantity: 1,
        total: "",
    },
};
function shopReducer(state = initState, action) {
    switch (action.type) {
        case shopActions.ADD_ITEM_TO_CART: {
            return {
                ...state,
                shopItem: action.payload
            };
        }
        case shopActions.ADD_ITEM_TO_CART_SUCCESS: {
            return {
                ...state,
                isAddItemSuccess : action.payload
            };
        }
        case shopActions.ADD_ITEM_TO_CART_ERROR: {
            return {
                ...state,
                isAddItemSuccess : action.payload
            };
        }
        default: {
            return state;
        }
    };
};
export default shopReducer;