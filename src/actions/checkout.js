
const checkoutActions = {
  GET_ORDER_ITEM: "GET_ORDER_ITEM",
  GET_ORDER_ITEM_SUCCESS: "GET_ORDER_ITEM_SUCCESS",
  GET_ORDER_ITEM_ERROR: "GET_ORDER_ITEM_ERROR",
  SAVE_BILL_INFO: "SAVE_BILL_INFO",
  SAVE_BILL_INFO_ERROR: "SAVE_BILL_INFO_ERROR",
  SAVE_BILL_INFO_SUCCESS: "SAVE_BILL_INFO_SUCCESS",

  getOrderItem: () => {
    return { type: checkoutActions.GET_ORDER_ITEM };
  },

  getOrderItemSuccess: data => ({
    type: checkoutActions.GET_ORDER_ITEM_SUCCESS,
    payload: { data },
  }),

  getOrderItemError: error => ({
    type: checkoutActions.GET_ORDER_ITEM_ERROR,
    payload: { error },
  }),

  saveBillInfo: (data) => ({
    type: checkoutActions.SAVE_BILL_INFO,
    payload: { data },
  }),

  saveBillInfoError: error => ({
    type: checkoutActions.SAVE_BILL_INFO_ERROR,
    payload: { error },
  }),
  saveBillInfoSuccess: data => ({
    type: checkoutActions.SAVE_BILL_INFO_SUCCESS,
    payload: { data },
  }),
};
export default checkoutActions;