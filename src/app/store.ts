import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice";
import token from "../features/token/tokenSlice";

export const store = configureStore({
    reducer: {
        user, token
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch