import { checkoutActions } from "@actions";

const initState = {
  isLoading: false,
  errorMessage: false,
  products: {},
  product: {
    key: null,
    id: "",
    firstName: "",
    lastName: "",
    compnayName: "",
    email: "",
    mobile: "",
    country: "",
    adress: "",
  },
};

export default function checkoutReducers(
  state = initState,
  { type, payload }
) {
  switch (type) {
    case checkoutActions.GET_ORDER_ITEM:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
      };
    case checkoutActions.GET_ORDER_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload.data,
        errorMessage: false,
      };
    case checkoutActions.GET_ORDER_ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Lỗi",
      };
    default:
      return state;
  }
}