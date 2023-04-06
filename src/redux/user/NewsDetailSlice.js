import { createSlice } from "@reduxjs/toolkit";
import { getNewDetail } from "./UserThunk";

export const newDetailSlice = createSlice({
  name: "newDetail",
  initialState: {
    newDetailList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getNewDetail.fulfilled, (state, action) => {
      state.newDetailList = action.payload;
    });
  },
});

export const newDetailReducer = newDetailSlice.reducer;
