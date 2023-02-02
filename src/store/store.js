import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './slices/auth'
import { songSlice } from "./slices/song/index.js";
import { themeSlice } from "./slices/theme/index.js";

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        song: songSlice.reducer,
        theme: themeSlice.reducer
    }
})
