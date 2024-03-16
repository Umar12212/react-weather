import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weather/weatherSlice";
import themeSlice from "./theme/themeSlice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        theme: themeSlice
    }
})


