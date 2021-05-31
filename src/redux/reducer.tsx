import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMemes } from "../API";
import { MemeType } from "../types";

interface MemesState {
  memes: [] | MemeType[];
  loading: "idle" | "loading" | "succeeded" | "failed";
}

const initialState = {
  memes: [],
  loading: "idle",
} as MemesState;

export const getMemesAsync = createAsyncThunk("memes/getMemes", () => {
  return getMemes();
});

export const memesSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemesAsync.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getMemesAsync.fulfilled, (state, action) => {
        state.loading = "idle";
        state.memes = action.payload;
      });
  },
});

export const selectMemes = (state: MemesState) => state.memes;

export default memesSlice.reducer;
