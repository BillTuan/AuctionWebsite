import { combineReducers } from "redux";

//Reducers
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
export default combineReducers({
  productReducer,
  categoryReducer,
  userReducer
});
