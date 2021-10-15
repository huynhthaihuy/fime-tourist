import { combineReducers } from "redux";
import checkoutReducers from "./checkoutReducers";
import shopReducer from "./shop";
import cartReducer from "./cart";
const rootReducer = combineReducers({cartReducer,checkoutReducers, shopReducer});


export default rootReducer;
