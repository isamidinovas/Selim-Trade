import { createSlice } from "@reduxjs/toolkit";
import { getSimilarNews } from "./UserThunk";

export const similarNewsSlice = createSlice({
  name: "similarNews",
  initialState: {
    similarNewsList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getSimilarNews.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getSimilarNews.fulfilled, (state, action) => {
      state.similarNewsList = action.payload;
      state.isloading = false;
    });
  },
});

export const similarNewsReducer = similarNewsSlice.reducer;
