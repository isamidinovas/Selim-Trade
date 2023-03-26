import { createSlice } from "@reduxjs/toolkit";
import { getNewsPag } from "./UserThunk";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsPaginationList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsPag.fulfilled, (state, action) => {
      state.newsPaginationList = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;
