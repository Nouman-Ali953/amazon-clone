import * as actionTypes from "../constants/cartConstants";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};

export const emptyCart = () => async (dispatch) => {
  dispatch({ type: actionTypes.EMPTY_CART, payload: [] });
};
