import { combineReducers } from "redux";
import cardReducer from "./card";
const rootReducer = combineReducers({
  cardModels: cardReducer,
});
export default rootReducer;
