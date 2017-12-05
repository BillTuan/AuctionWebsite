import { GET_LIST_PRODUCT } from "../action/constants";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};
