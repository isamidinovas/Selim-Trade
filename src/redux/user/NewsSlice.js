import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./UserThunk";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.newsList = action.payload;
      state.loading = false;
    });
  },
});
export const newsReducer = newsSlice.reducer;
