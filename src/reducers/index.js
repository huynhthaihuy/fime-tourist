import { combineReducers } from "redux";
import checkoutReducers from "./checkoutReducers";
import cardReducer from "./card";
import cartReducer from "./cart";
const rootReducer = combineReducers({
  cartReducer,
  checkoutReducers,
  cardModels: cardReducer,
});

export default rootReducer;
