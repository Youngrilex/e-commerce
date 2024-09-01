import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import productSlice from "./slice/productSlice";

export const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  product: productSlice,
});
