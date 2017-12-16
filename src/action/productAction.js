import axios from "axios";
import {
  GET_LIST_PRODUCT,
  GET_PRODUCT,
  GET_LIST_PRODUCT_PENDING
} from "./constants";

export const getListProduct = () => async dispatch => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: GET_LIST_PRODUCT, payload: data });
};
export const getListProductPending = () => async dispatch => {
  const { data } = await axios.get("/api/admin/prodntacpt");
  dispatch({ type: GET_LIST_PRODUCT_PENDING, payload: data });
};

export const getProduct = id => async dispatch => {
  const { data } = await axios.get("/api/products/" + id);
  dispatch({ type: GET_PRODUCT, payload: data });
};

export const getListResultSearch = input => async dispatch => {
  const { data } = await axios.get(`/api/search?search=${input}`);
  console.log("====================================");
  console.log(data);
  console.log("====================================");
};
