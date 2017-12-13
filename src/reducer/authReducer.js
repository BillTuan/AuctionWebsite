import { SIGN_IN, SIGN_OUT } from "../action/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        data: action.data
      };
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};
