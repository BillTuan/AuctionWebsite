import { SIGN_IN, SIGN_OUT, SET_HEADER } from "../action/constants";

export default (state = { data: null, headers: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { data: action.payload.data, headers: action.payload.headers };
    case SIGN_OUT:
      return { data: null, headers: null };
    case SET_HEADER:
      return { ...state, headers: action.payload };
    default:
      return state;
  }
};
