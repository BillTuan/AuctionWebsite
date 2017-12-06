import { GET_LIST_CATEGORY } from "../action/constants";
const initialState = {
  categories: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state;
  }
};
