import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./UserThunk";

export const allNewsSlice = createSlice({
  name: "allNews",
  initialState: {
    newsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
  },
});
export const allNewsReducer = allNewsSlice.reducer;
