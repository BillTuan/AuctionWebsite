import axios from "axios";
import { GET_LIST_PRODUCT, GET_PRODUCT } from "./constants";

export const getListProduct = () => async dispatch => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: GET_LIST_PRODUCT, payload: data });
};

export const getProduct = id => async dispatch => {
  const { data } = await axios.get("/api/products/" + id);
  dispatch({ type: GET_PRODUCT, payload: data });
};
