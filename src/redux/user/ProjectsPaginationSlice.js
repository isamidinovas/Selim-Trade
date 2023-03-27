import { createSlice } from "@reduxjs/toolkit";
import { getProjectsPagination } from "./UserThunk";

export const projectsPaginationSlice = createSlice({
  name: "projectsPagination",
  initialState: {
    projectsPagList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProjectsPagination.fulfilled, (state, action) => {
      state.projectsPagList = action.payload;
    });
  },
});

export const projectsPaginationReducer = projectsPaginationSlice.reducer;
