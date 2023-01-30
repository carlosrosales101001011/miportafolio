import { configureStore } from "@reduxjs/toolkit";
import { uiSliceDarkMode } from "./uiSliceDarkMode";

export const store = configureStore({
    reducer: {
        ui: uiSliceDarkMode.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false
    })
})