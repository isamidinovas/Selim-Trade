import { createSlice } from "@reduxjs/toolkit";
import { getGateInfo } from "./UserThunk";

export const gateInfoSlice = createSlice({
  name: "gateInfo",
  initialState: {
    gateInfoList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getGateInfo.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getGateInfo.fulfilled, (state, action) => {
      state.gateInfoList = action.payload;
      state.isloading = false;
    });
  },
});

export const gateInfoReducer = gateInfoSlice.reducer;
