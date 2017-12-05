import axios from "axios";
import { GET_LIST_PRODUCT } from "./constants";

export const getListProduct = () => async dispatch => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: GET_LIST_PRODUCT, payload: data });
};
