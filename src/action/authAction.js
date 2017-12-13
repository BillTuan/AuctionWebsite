import { SIGN_IN, SIGN_OUT } from "./constants";

import axios from "axios";

export const signIn = (email, password) => async dispatch => {
  try {
    const { headers, data } = await axios({
      method: "POST",
      url: "/api/auth/sign_in",
      headers: { email, password }
    });
    localStorage.setItem("headers", JSON.stringify(headers));
    localStorage.setItem("data", JSON.stringify(data));

    dispatch({ type: SIGN_IN, data });
  } catch (error) {}
};

export const getUserProfile = () => async dispatch => {
  const data = JSON.parse(localStorage.getItem("data"));
  dispatch({ type: SIGN_IN, data });
};
export const signOut = history => async dispatch => {
  localStorage.clear();
  history.push("/login");
  dispatch({ type: SIGN_OUT });
};
