import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
const  store=configureStore({
    reducer:{
        auth:AuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
export default store;
// all reducers state
export const AuthSelector=(state)=>state.auth;
