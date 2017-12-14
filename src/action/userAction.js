import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM
} from "./constants";
import axios from "axios";
import { getHeader } from "../utils";

export const getProfileDetail = userID => async dispatch => {
  const { data } = JSON.parse(localStorage.getItem("data"));
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  //const { data } = await axios.get(`/api/users/${userID}`);
  dispatch({ type: GET_PROFILE_DETAIL, payload: data });
};

async function getWinProduct(userID) {
  const { data } = await axios.get(`/api/users/${userID}/bids`);
  return data.map(({ product_id }) => ({ product_id }));
}

function checkWin(product, winProduct) {
  return (
    winProduct
      .map(win => {
        if (win.id === product.id) {
          return true;
        }
        return false;
      })
      .indexOf(true) !== -1
  );
}

export const getParticipationProduct = userID => async dispatch => {
  const { data } = await axios.get(`/api/users/${userID}/auctions`);
  const winBid = await getWinProduct(userID);
  const winProduct = [];
  for (let index = 0; index < winBid.length; index++) {
    const { product_id } = winBid[index];
    const { data } = await axios.get(`/api/products/${product_id}`);
    winProduct.push(data);
  }

  const participating = data.map(product => {
    return checkWin(product, winProduct) === true
      ? { ...product, win: true }
      : { ...product, win: false };
  });

  dispatch({ type: GET_PARTICIPATING_PRODUCT, payload: participating });
};
export const getListWatchItem = () => async (dispatch, getState) => {
  const headers = getState().authReducer.headers;
  console.log("HEADERS", headers);
  const { data } = await axios({
    method: "GET",
    url: "/api/users/viewed_items",
    headers
  });
  dispatch({ type: GET_LIST_WATCH_ITEM, payload: data });
};
export const getListUser = () => async dispatch => {
  const { data } = await axios.get("/api/admin/alluser");
  dispatch({ type: GET_ALL_USER, payload: data });
};
export const getListPostedItem = userID => async dispatch => {
  const { data } = await axios.get(`/api/users/${userID}/products`);
  dispatch({ type: GET_LIST_POSTED_ITEM, payload: data });
};
