const cardActions = {
  GET_CARD_REQUEST: "GET_CARD_REQUEST",
  GET_CARD_SUCCESS: "GET_CARD_SUCCESS",
  GET_CARD_FAIL: "GET_CARD_FAIL",

  DELETE_CARD: "DELETE_CARD",
  DELETE_CARD_SUCCESS: "DELETE_CARD_SUCCESS",
  DELETE_CARD_FAIL: "DELETE_CARD_FAIL",

  getCardRequest: () => ({
    type: cardActions.GET_CARD_REQUEST,
  }),
  getCardSuccess: (data) => ({
    type: cardActions.GET_CARD_SUCCESS,
    payload: { data },
  }),
  getCardFailure: (error) => ({
    type: cardActions.GET_CARD_FAIL,
    payload: { error },
  }),

  deleteCard: (data) => ({
    type: cardActions.DELETE_CARD,
    payload: { data },
  }),
  deleteCardSuccess: () => ({
    type: cardActions.DELETE_CARD_SUCCESS,
  }),
  deleteCardFailure: () => ({
    type: cardActions.DELETE_CARD_FAIL,
  }),
};

export default cardActions;
