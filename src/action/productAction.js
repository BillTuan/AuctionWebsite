import axios from "axios";
import {
  GET_PRODUCT_BY_CATE,
  GET_LIST_PRODUCT,
  GET_PRODUCT,
  GET_LIST_PRODUCT_PENDING,
  GET_BID_HISTORY
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

export const getBidHistory = id => async (dispatch, getState) => {
  const { headers } = getState().authReducer;

  const { data } = await axios({
    method: "GET",
    url: `/api/products/${id}/history`,
    headers
  });
  dispatch({ type: GET_BID_HISTORY, payload: data });
};

export const likeItem = id => async (dispatch, getState) => {
  const { headers } = getState().authReducer;
  await axios({
    method: "POST",
    url: `/api/users/viewed-items/${id}`,
    headers
  });
  dispatch({ type: "LIKE" });
};

export const getProductByCate = id => async dispatch => {
  const { data } = await axios.get(`/api/categories/${id}/products`);
  dispatch({ type: GET_PRODUCT_BY_CATE, payload: data });
};
