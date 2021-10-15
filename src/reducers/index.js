import { combineReducers } from "redux";
import  checkoutReducers  from "./checkoutReducers";
import cartReducer from "./cart";
const rootReducer = combineReducers({cartReducer,checkoutReducers});


export default rootReducer;
