import {
  GET_LIST_WATCH_ITEM,
  GET_PROFILE_DETAIL,
  GET_PARTICIPATING_PRODUCT,
  GET_ALL_USER,
  GET_LIST_POSTED_ITEM
} from "../action/constants";
const initialState = {
  watchProduct: [],
  participating: [],
  profileDetail: {},
  allUser: [],
  productsPosted: []
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
    default:
      return state;
  }
};
