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
    status: null,
    errMessage: "",
  },

  extraReducers: (builder) => {
    builder.addCase(orderCreate.fulfilled, (state, action) => {
      state.orderInfo = action.payload;
      state.status = "resolved";
      return;
    });
    builder.addCase(orderCreate.rejected, (state, action) => {
      state.status = "rejected";
      state.errMessage = "Заполните все поля!";
    });
  },
});
export const ordersReducer = ordersSlice.reducer;
