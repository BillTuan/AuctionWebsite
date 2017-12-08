import {
  GET_LIST_PRODUCT,
  GET_PRODUCT,
  GET_LIST_PRODUCT_PENDING
} from "../action/constants";

const initialState = {
  products: [],
  productsPending: [],
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

    default:
      return state;
  }
};
