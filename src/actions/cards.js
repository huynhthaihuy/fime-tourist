const cardActions = {
  GET_CARD_REQUEST: "GET_CARD_REQUEST",
  GET_CARD_SUCCESS: "GET_CARD_SUCCESS",
  GET_CARD_FAIL: "GET_CARD_FAIL",

  ADD_CARD: "ADD_CARD",
  ADD_CARD_SUCCESS: "ADD_CARD_SUCCESS",
  ADD_CARD_FAIL: "ADD_CARD_FAIL",

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

  addCard: (data) => ({
    type: cardActions.ADD_CARD,
    payload: { data },
  }),
  addCardSuccess: (key, data) => ({
    type: cardActions.ADD_CARD_SUCCESS,
    payload: { key, data },
  }),
  addCardFailure: (error) => ({
    type: cardActions.ADD_CARD_FAIL,
  }),
  deleteCard: (data) => ({
    type: cardActions.DELETE_CARD,
    payload: { data },
  }),
  deleteCardSuccess: (data) => ({
    type: cardActions.DELETE_CARD_SUCCESS,
    payload: { data },
  }),
  deleteCardFailure: () => ({
    type: cardActions.DELETE_CARD_FAIL,
  }),
};

export default cardActions;
