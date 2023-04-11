import { createSlice } from "@reduxjs/toolkit";
import { getGates } from "./UserThunk";

export const gatesSlice = createSlice({
  name: "gates",
  initialState: {
    gatesList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getGates.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getGates.fulfilled, (state, action) => {
      state.gatesList = action.payload;
      state.isloading = false;
    });
  },
});

export const gatesReducer = gatesSlice.reducer;
