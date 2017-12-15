import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM,
  UPDATE_PROFILE,
  SIGN_IN,
  SET_HEADER
} from "./constants";
import axios from "axios";
import { getHeader } from "../utils";
import { setTimeout } from "core-js/library/web/timers";

export const getProfileDetail = userID => async dispatch => {
  const { data } = JSON.parse(localStorage.getItem("data"));
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  // const { data } = await axios.get(`/api/users/${userID}/profile`);
  dispatch({ type: GET_PROFILE_DETAIL, payload: data });
};
export const updateProfile = newData => async (dispatch, getState) => {
  const oldHeader = getState().authReducer.headers;
  const oldData = getState().authReducer.data.data;

  const { headers, status } = await axios({
    method: "PUT",
    url: "/api/users",
    headers: oldHeader,
    data: newData
  });

  const newHeader = getHeader(headers);
  const packData = { data: status === 200 ? newData : oldData };
  const credentialHeaders = status === 200 ? newHeader : oldHeader;

  const stringCredentialHeaders = await JSON.stringify(credentialHeaders);
  const stringPackData = await JSON.stringify(packData);

  setTimeout(() => {
    localStorage.setItem("headers", stringCredentialHeaders);
    localStorage.setItem("data", stringPackData);
    setTimeout(() => {
      dispatch({
        type: SIGN_IN,
        payload: {
          data: packData,
          headers: credentialHeaders
        }
      });
      dispatch({
        type: UPDATE_PROFILE,
        payload: status
      });
    }, 200);
  }, 200);
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
  const oldHeaders = getState().authReducer.headers;
  console.log("HEADERS", oldHeaders);
  const { data, headers } = await axios({
    method: "GET",
    url: "/api/users/viewed_items",
    headers: oldHeaders
  });
  //dispatch({ type: GET_LIST_WATCH_ITEM, payload: data });
  console.log("==============New headers=================");
  console.log(headers);
  console.log("====================================");

  const credentialHeaders = getHeader(headers);
  const stringCredentialHeaders = JSON.stringify(credentialHeaders);
  setTimeout(() => {
    localStorage.setItem("headers", stringCredentialHeaders);
    dispatch({ type: SET_HEADER, payload: credentialHeaders });
    dispatch({ type: GET_LIST_WATCH_ITEM, payload: data });
  }, 100);
};
export const getListUser = () => async dispatch => {
  const { data } = await axios.get("/api/admin/alluser");
  dispatch({ type: GET_ALL_USER, payload: data });
};
export const getListPostedItem = userID => async dispatch => {
  const { data } = await axios.get(`/api/users/${userID}/products`);
  dispatch({ type: GET_LIST_POSTED_ITEM, payload: data });
};

// function setHeaders(headers,oldHeader,oldData,newData) {
//   const newHeader = getHeader(headers);
//   const packData = { data: status === 200 ? newData : oldData };
//   const credentialHeaders = status === 200 ? newHeader : oldHeader;

//   const stringCredentialHeaders = await JSON.stringify(credentialHeaders);
//   const stringPackData = await JSON.stringify(packData);

//   localStorage.setItem("headers", stringCredentialHeaders);
//   localStorage.setItem("data", stringPackData);
// }
