import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


export const reducer = combineReducers({
    [apiSlice.reducerPath]:apiSlice.reducer
})