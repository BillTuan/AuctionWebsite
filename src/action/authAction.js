import { SIGN_IN, SIGN_OUT } from "./constants";

import axios from "axios";
import { getHeader } from "../utils/index";

export const signIn = (email, password, history) => async dispatch => {
  try {
    const { headers, data } = await axios({
      method: "POST",
      url: "/api/users/auth/sign_in",
      headers: { email, password }
    });

    const credentialHeaders = getHeader(headers);

    // delete data.data.authentication_token;
    // delete data.data.nickname;
    // delete data.data.provider;
    // delete data.data.uid;

    localStorage.setItem("headers", JSON.stringify(credentialHeaders));
    localStorage.setItem("data", JSON.stringify(data));

    dispatch({ type: SIGN_IN, payload: { data, headers: credentialHeaders } });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = () => async dispatch => {
  const data = JSON.parse(localStorage.getItem("data"));
  const headers = JSON.parse(localStorage.getItem("headers"));
  dispatch({ type: SIGN_IN, payload: { data, headers } });
};

export const signOut = history => async (dispatch, getState) => {
  localStorage.clear();
  const { headers } = getState().authReducer;
  const { status } = await axios({
    method: "DELETE",
    url: "/api/users/auth/sign_out",
    headers
  });
  console.log("===============Status Sign Out================");
  console.log(status);
  console.log("====================================");
  history.push("/login");
  dispatch({ type: SIGN_OUT });
};
