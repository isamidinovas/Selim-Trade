import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./UserThunk";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviewsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviewsList = action.payload;
      // localStorage.setItem("token", action.payload.token);
      localStorage.setItem("token", "ваш_токен");
    });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
