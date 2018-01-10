import {
  GET_PRODUCT_BY_CATE,
  GET_LIST_PRODUCT,
  GET_PRODUCT,
  GET_LIST_PRODUCT_PENDING,
  GET_BID_HISTORY
} from "../action/constants";

const initialState = {
  bidHistory: [],
  products: [],
  productsPending: [],
  productByCate: [],
  product: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        products: action.payload
      };
    case GET_LIST_PRODUCT_PENDING:
      return {
        ...state,
        productsPending: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_BID_HISTORY:
      return {
        ...state,
        bidHistory: action.payload
      };
    case GET_PRODUCT_BY_CATE:
      return { ...state, productByCate: action.payload };
    default:
      return state;
  }
};
