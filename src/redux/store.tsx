import { combineReducers, configureStore } from "@reduxjs/toolkit";
import memesReducer from "./reducer";

const rootReducer = combineReducers({
  memes: memesReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
