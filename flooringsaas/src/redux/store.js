import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/globalSlice";
import inventoryReducer from "./slices/inventorySlice";
import quoteReducer from "./slices/quoteSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        global: globalReducer,
        inventory: inventoryReducer,
        quote: quoteReducer,
        user: userReducer,
        auth: authReducer, 
    },
});
