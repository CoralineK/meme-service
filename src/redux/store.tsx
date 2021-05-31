import { configureStore } from "@reduxjs/toolkit";
import memesReducer from "./reducer";

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});
