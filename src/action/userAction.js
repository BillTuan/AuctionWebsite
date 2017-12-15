import {
  GET_LIST_WATCH_ITEM,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM,
  SIGN_IN,
  GET_LIST_WIN_ITEM
} from "./constants";
import axios from "axios";
import { setTimeout } from "core-js/library/web/timers";

export const updateProfile = newData => async (dispatch, getState) => {
  const oldHeader = getState().authReducer.headers;
  const oldData = getState().authReducer.data.data;
  const { status } = await axios({
    method: "PUT",
    url: "/api/users",
    headers: oldHeader,
    data: newData
  });
  const packData = { data: status === 200 ? newData : oldData };
  setTimeout(() => {
    localStorage.setItem("data", JSON.stringify(packData));
    dispatch({
      type: SIGN_IN,
      payload: {
        data: packData,
        headers: oldHeader
      }
    });
  }, 100);
};

async function getWinProduct(headers) {
  const { data } = await axios({
    url: `/api/users/bids`,
    method: "GET",
    headers
  });
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

export const getParticipationProduct = () => async (dispatch, getState) => {
  const { headers } = getState().authReducer;

  const { data } = await axios({
    url: `/api/users/auctions`,
    method: "GET",
    headers
  });
  const winBid = await getWinProduct(headers);
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
  const { headers } = getState().authReducer;
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

export const getListPostedItem = () => async (dispatch, getState) => {
  const { headers } = getState().authReducer;

  const { data } = await axios({
    url: `/api/users/products`,
    method: "GET",
    headers
  });
  dispatch({ type: GET_LIST_POSTED_ITEM, payload: data });
};

export const getWinAuction = () => async (dispatch, getState) => {
  const { headers } = getState().authReducer;
  const winAuction = await getWinProduct(headers);

  const winProduct = [];
  for (let index = 0; index < winAuction.length; index++) {
    const { product_id } = winAuction[index];
    const { data } = await axios.get(`/api/products/${product_id}`);
    winProduct.push(data);
  }

  dispatch({ type: GET_LIST_WIN_ITEM, payload: winProduct });
};
