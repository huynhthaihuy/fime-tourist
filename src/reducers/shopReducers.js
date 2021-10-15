import shopActions from "./action";

const initState = {
    isLoading: false,
    errorMessage: false,
  products: {},
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case shopActions.ADD_TO_CART:
      return {
        ...state,
          isLoading: true,
        errorMessage: false,
      };

    case shopActions.ADD_TO_CART.SUCCESS:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
      };

    case shopActions.ADD_TO_CART.ERROR:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
