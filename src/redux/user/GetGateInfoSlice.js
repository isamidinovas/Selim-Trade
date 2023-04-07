import { createSlice } from "@reduxjs/toolkit";
import { getGateInfo } from "./UserThunk";

export const gateInfoSlice = createSlice({
  name: "gateInfo",
  initialState: {
    gateInfoList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getGateInfo.fulfilled, (state, action) => {
      state.gateInfoList = action.payload;
    });
  },
});

export const gateInfoReducer = gateInfoSlice.reducer;
