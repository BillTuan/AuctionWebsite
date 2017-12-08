import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT
} from "../action/constants";
const initialState = {
  watchProduct: [],
  participating: [],
  profileDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_WATCH_ITEM:
      return { ...state, watchProduct: action.payload };
    case GET_PROFILE_DETAIL:
      return { ...state, profileDetail: action.payload };
    case GET_PARTICIPATING_PRODUCT:
      return { ...state, participating: action.payload };
    default:
      return state;
  }
};
