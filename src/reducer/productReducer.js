import {
  GET_LIST_PRODUCT,
  GET_PRODUCT,
  GET_LIST_WATCH_ITEM
} from "../action/constants";

const initialState = {
  products: [],
  product: {},
  watchItem: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_LIST_WATCH_ITEM:
      return {
        ...state,
        watchItem: action.payload
      };
    default:
      return state;
  }
};
