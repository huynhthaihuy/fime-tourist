import { checkoutActions } from "@actions";

const initState = {
  isLoading: false,
  isGetting: false,
  isGettingSuccess: false,
  errorMessage: false,
  products: {},
  product: {
    key: null,
    name: "",
    quantity: "",
    total: ""
  },
  billInfos: {},
  billInfo: {
    key: null,
    id: "",
    firstName: "",
    lastName: "",
    compnayName: "",
    email: "",
    mobile: "",
    country: "",
    adress: "",
  }
};

export default function checkoutReducers(
  state = initState,
  { type, payload }
) {
  switch (type) {
    case checkoutActions.GET_ORDER_ITEM:
      return {
        ...state,
        isGetting: true,
        errorMessage: false,
      };
    case checkoutActions.GET_ORDER_ITEM_SUCCESS:
      return {
        ...state,
        isGetting: false,
        product: payload.data,
        errorMessage: false,
        isGettingSuccess: true,
      };
    case checkoutActions.GET_ORDER_ITEM_ERROR:
      return {
        ...state,
        isGetting: false,
        errorMessage: "Lỗi",
      };
      case checkoutActions.SAVE_BILL_INFO:
        return {
          ...state,
          isLoading: true,
          errorMessage: "Lỗi",
        };
        case checkoutActions.SAVE_BILL_INFO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          errorMessage: false,
        };
    default:
      return state;
  }
}