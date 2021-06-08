import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMemes } from "../API";
import { MemeType } from "../types";
import { RootState } from "./store";

type loadingType = "idle" | "loading" | "succeeded" | "failed";

type loadingTypes = {
  [key: string]: loadingType;
};

const LOADING: loadingTypes = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

interface MemesState {
  memes: [] | MemeType[];
  loading: loadingType;
}

const initialState = {
  memes: [],
  loading: LOADING.IDLE,
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
        state.loading = LOADING.LOADING;
      })
      .addCase(getMemesAsync.fulfilled, (state, action) => {
        state.loading = LOADING.IDLE;
        state.memes = action.payload;
      });
  },
});

export const { addUpvote, addDownvote, setHot } = memesSlice.actions;

export const selectMemes = (state: RootState) =>
  state.memes.memes.filter((meme) => !meme.hot);

export const selectHotMemes = (state: RootState) =>
  state.memes.memes.filter((meme) => meme.hot);

export default memesSlice.reducer;
