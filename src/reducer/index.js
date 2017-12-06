import { combineReducers } from "redux";

//Reducers
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  productReducer,
  categoryReducer
});
