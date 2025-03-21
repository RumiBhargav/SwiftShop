import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import loggerMiddleware from "./logger.middleware";
const  store=configureStore({
    reducer:{
        auth:AuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
export default store;
// all reducers state
export const authSelector=(state)=>state.auth;
