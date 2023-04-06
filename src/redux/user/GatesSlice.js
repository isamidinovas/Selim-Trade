import { createSlice } from "@reduxjs/toolkit";
import { getGates } from "./UserThunk";

export const gatesSlice = createSlice({
  name: "gates",
  initialState: {
    gatesList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getGates.fulfilled, (state, action) => {
      state.gatesList = action.payload;
    });
  },
});

export const gatesReducer = gatesSlice.reducer;
