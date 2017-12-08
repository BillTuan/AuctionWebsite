import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER
} from "./constants";
import axios from "axios";
export const getProfileDetail = userID => async dispatch => {
  const { data } = await axios.get("/api/users/");
  dispatch({ type: GET_PROFILE_DETAIL, payload: data });
};
export const getParticipationProduct = userID => async dispatch => {
  const { data } = await axios.get("/api/users/");
  dispatch({ type: GET_PARTICIPATING_PRODUCT, payload: data });
};
export const getListWatchItem = userID => async dispatch => {
  const { data } = await axios.get(`/api/users/${userID}/viewed-items`);
  dispatch({ type: GET_LIST_WATCH_ITEM, payload: data });
};
export const getListUser = () => async dispatch => {
  const { data } = await axios.get("/api/admin/alluser");
  dispatch({ type: GET_ALL_USER, payload: data });
};
