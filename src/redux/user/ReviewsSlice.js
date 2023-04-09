import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./UserThunk";

export const reviewsSlice = createSlice({
  name: "reviews",
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
      localStorage.setItem("token", "ваш_токен");
      state.isloading = false;
    });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
