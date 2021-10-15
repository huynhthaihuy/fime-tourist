import { cardActions } from "@actions";
const initialState = {
  isLoading: false,
  isGetCardSuccess: false,
  isDeleteCardSuccess: false,
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
      // todo
      return {
        ...state,
        isLoading: true,
      };
    }
    case cardActions.GET_CARD_SUCCESS: {
      console.log(action.payload, "action.payload");
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
    case cardActions.DELETE_CARD: {
      return {
        ...state,
      };
    }
    case cardActions.DELETE_CARD_SUCCESS: {
      return {
        ...state,
        isDeleteCardSuccess: true,
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
