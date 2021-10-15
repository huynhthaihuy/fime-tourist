import { combineReducers } from "redux";
import checkoutReducers from "./checkoutReducers";
import shopReducer from "./shop";
import cartReducer from "./cart";
import cardReducer from "./card";
const rootReducer = combineReducers({
  cartReducer,
  checkoutReducers,
  cardModels: cardReducer,
  shopReducer,
});

export default rootReducer;
