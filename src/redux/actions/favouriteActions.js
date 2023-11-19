

import * as actionTypes from '../constants/favouriteConstants'

export const addFavourite = (product) => async(dispatch) => {
    try {
        dispatch({type:actionTypes.ADD_FAVOURITE, payload: product})
    } catch (error) {
        dispatch({type:actionTypes.ADD_FAVOURITE_ERROR, payload: error.message})
    }
} 