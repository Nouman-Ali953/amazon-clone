import * as actionType from "../constants/cartConstants";

export const getCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find((product) => product._id === item._id);
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data._id === exist._id ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((data) => data._id !== action.payload),
      };  
    case actionType.EMPTY_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
