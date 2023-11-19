import axios from "axios";
import * as actionTypes from "../constants/productContants";
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapiserver.reactbd.com/tech`
    );
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, playload: error.messege });
  }
};

