import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./UserThunk";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
  },
});
export const newsReducer = newsSlice.reducer;
