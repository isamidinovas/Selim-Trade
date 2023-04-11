import { createSlice } from "@reduxjs/toolkit";
import { getGatesPagination } from "./UserThunk";

export const gatesPaginationSlice = createSlice({
  name: "gatesPagination",
  initialState: {
    gatesPaginationList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getGatesPagination.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getGatesPagination.fulfilled, (state, action) => {
      state.gatesPaginationList = action.payload;
      state.isloading = false;
    });
  },
});

export const gatesPaginationReducer = gatesPaginationSlice.reducer;
