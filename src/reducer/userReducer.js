import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM,
  UPDATE_PROFILE
} from "../action/constants";
const initialState = {
  watchProduct: [],
  participating: [],
  profileDetail: {},
  allUser: [],
  productsPosted: [],
  status: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_WATCH_ITEM:
      return { ...state, watchProduct: action.payload };
    case GET_LIST_POSTED_ITEM:
      return { ...state, productsPosted: action.payload };
    case GET_PROFILE_DETAIL:
      return { ...state, profileDetail: action.payload };
    case GET_PARTICIPATING_PRODUCT:
      return { ...state, participating: action.payload };
    case GET_ALL_USER:
      return { ...state, allUser: action.payload };
    case UPDATE_PROFILE:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
