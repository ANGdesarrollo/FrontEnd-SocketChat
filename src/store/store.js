import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './slices/auth'
import { songSlice } from "./slices/song/index.js";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        song: songSlice.reducer,
    }
})
