import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./UserThunk";

export const reviewsListSlice = createSlice({
  name: "reviewsList",
  initialState: {
    reviewsList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviewsList = action.payload;
      state.isloading = false;
    });
  },
});

export const reviewsListReducer = reviewsListSlice.reducer;
