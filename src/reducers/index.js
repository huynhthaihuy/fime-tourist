import { combineReducers } from "redux";
import  checkoutReducers  from "./checkoutReducers";
const rootReducer = combineReducers({
    checkoutReducers: checkoutReducers,
});
export default rootReducer;
