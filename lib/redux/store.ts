import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, REHYDRATE,PERSIST, PURGE, REGISTER, persistReducer,persistStore} from "redux-persist";
import { apiSlice } from "./apiSlice";

import { reducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";


const rootConfig:any ={
    key:"root",
    storage,
    whiteList:['product']
}


const persistedReducer = persistReducer(rootConfig,reducer)

export const store = configureStore({
    reducer:persistedReducer,
    devTools:true,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST, PURGE, REGISTER]
            }
        }).concat(apiSlice.middleware)
    }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;