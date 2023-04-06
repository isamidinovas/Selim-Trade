import { createSlice } from "@reduxjs/toolkit";
import { getSimilarNews } from "./UserThunk";

export const similarNewsSlice = createSlice({
  name: "similarNews",
  initialState: {
    similarNewsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getSimilarNews.fulfilled, (state, action) => {
      state.similarNewsList = action.payload;
    });
  },
});

export const similarNewsReducer = similarNewsSlice.reducer;
