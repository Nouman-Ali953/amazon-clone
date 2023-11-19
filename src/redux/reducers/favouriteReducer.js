import * as actionTypes from "../constants/favouriteConstants";
export const getFavouriteProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVOURITE:
      const item = action.payload;
      const exist = state.products.find((product) => product._id === item._id);
      if (exist) {
        return {
          ...state,
          products: state.products.map((data) =>
            data._id === exist._id ? item : data
          ),
        };
      } else {
        return { ...state, products: [...state.products, item] };
      }

    default:
      return state;
  }
};
