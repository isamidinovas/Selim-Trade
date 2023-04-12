import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  orders: [],
};

export const getOrders = createAsyncThunk(
  "adminOrders/getOrders",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("api/v1/protected/orders", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);

const adminOrdersSlice = createSlice({
  name: "adminOrders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload.content;
    },
  },
});

export default adminOrdersSlice.reducer;
