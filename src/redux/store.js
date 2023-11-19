import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductReducer } from "./reducers/productReducer";
import { getCartReducer } from "./reducers/cartReducer";

import storage from "redux-persist/lib/storage"; // Import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"; // Import persistReducer and persistStore
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"; // Import autoMergeLevel2
import { getFavouriteProducts } from "./reducers/favouriteReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2, // Use autoMergeLevel2 for state reconciliation
};

const middleware = [thunk];
const reducer = combineReducers({
  productReducer: getProductReducer,
  cartReducer: getCartReducer,
  favouriteReducer: getFavouriteProducts,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
