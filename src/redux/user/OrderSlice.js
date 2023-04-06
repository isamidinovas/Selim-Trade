import { createSlice } from "@reduxjs/toolkit";
import { orderCreate } from "./UserThunk";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderInfo: {
      customerName: "",
      customerPhone: "",
      message: "",
    },
  },

  extraReducers: (builder) => {
    builder.addCase(orderCreate.fulfilled, (state, action) => {
      state.orderInfo = action.payload;
    });
  },
});
export const ordersReducer = ordersSlice.reducer;
