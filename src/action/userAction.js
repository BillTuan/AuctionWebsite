import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM
} from "./constants";
import axios from "axios";
export const getProfileDetail = userID => async dispatch => {
  const { data } = await axios.get("/api/users/");
  dispatch({ type: GET_PROFILE_DETAIL, payload: data });
};

async function getWinProduct(userID) {
  const { data } = await axios.get(`/api/users/${userID}/bids`);
  return data.map(({ product_id }) => ({ product_id }));
}

async function getProduct(product_id) {
  const { data } = await axios.get(`/api/products/${product_id}`);
  return data;
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
export const getListWatchItem = userID => async dispatch => {
  const { data } = await axios.get(`/api/users/${userID}/viewed-items`);
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
