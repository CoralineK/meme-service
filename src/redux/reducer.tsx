import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMemes } from "../API";
import { MemeType } from "../types";
import { RootState } from "./store";

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
  name: "getmemes",
  initialState,
  reducers: {
    setHot: (state) => {
      state.memes = state.memes.map((meme: MemeType) =>
        meme.upvote - meme.downvote > 5
          ? { ...meme, hot: true }
          : { ...meme, hot: false }
      );
    },
    addUpvote: (state, id) => {
      state.memes.map(
        (meme: MemeType) => meme.id === id.payload && meme.upvote++
      );
    },
    addDownvote: (state, id) => {
      state.memes.map(
        (meme: MemeType) => meme.id === id.payload && meme.downvote++
      );
    },
  },
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

export const { addUpvote, addDownvote, setHot } = memesSlice.actions;

export const selectMemes = (state: RootState) => state.memes.memes;

export default memesSlice.reducer;
