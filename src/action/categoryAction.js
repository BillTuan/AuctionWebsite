import { GET_LIST_CATEGORY } from "./constants";
import axios from "axios";

export const getListCategory = () => async dispatch => {
  const { data } = await axios.get("/api/categories");
  dispatch({ type: GET_LIST_CATEGORY, payload: data });
};
