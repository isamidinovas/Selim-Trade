import { createSlice } from "@reduxjs/toolkit";
import { getNewsPag } from "./UserThunk";

export const newsPaginationSlice = createSlice({
  name: "newsPagination",
  initialState: {
    newsPaginationList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsPag.fulfilled, (state, action) => {
      state.newsPaginationList = action.payload;
    });
  },
});

export const newsPaginationReducer = newsPaginationSlice.reducer;
