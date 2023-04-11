import { createSlice } from "@reduxjs/toolkit";
import { getNewsPag } from "./UserThunk";

export const newsPaginationSlice = createSlice({
  name: "newsPagination",
  initialState: {
    newsPaginationList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsPag.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getNewsPag.fulfilled, (state, action) => {
      state.newsPaginationList = action.payload;
      state.isloading = false;
    });
  },
});

export const newsPaginationReducer = newsPaginationSlice.reducer;
