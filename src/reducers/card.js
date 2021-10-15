import { cardActions } from "@actions";
const initialState = {
  isLoading: false,
  isGetCardSuccess: false,
  isDeleteCardSuccess: false,
  isAddCardSuccess: false,
  cards: [],
  card: {
    id: "",
    number: "",
    fullname: "",
    expiri: "",
    cvc: "",
    notes: "",
  },
};
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActions.GET_CARD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case cardActions.GET_CARD_SUCCESS: {
      return {
        ...state,
        isGetCardSuccess: true,
        cards: action.payload.data,
      };
    }
    case cardActions.GET_CARD_FAIL: {
      return {
        ...state,
        isGetCardSuccess: false,
        cards: [],
      };
    }
    case cardActions.ADD_CARD: {
      return {
        ...state,
      };
    }
    case cardActions.ADD_CARD_SUCCESS: {
      return {
        ...state,
        isAddCardSuccess: action.payload,
      };
    }
    case cardActions.ADD_CARD_FAIL: {
      return {
        ...state,
        isloading: false,
      };
    }
    case cardActions.DELETE_CARD: {
      return {
        ...state,
      };
    }
    case cardActions.DELETE_CARD_SUCCESS: {
      return {
        ...state,
        isDeleteCardSuccess: action.payload,
      };
    }
    case cardActions.DELETE_CARD_FAIL: {
      return {
        ...state,
        isDeleteCardSuccess: false,
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
