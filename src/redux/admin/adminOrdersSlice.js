import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  orders: [],
  orderHistory: null,
  currentStatus: null,
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
export const getOrderHistory = createAsyncThunk(
  "adminOrders/getOrderHistory",
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/api/v1/protected/orders/${id}/history`,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log(response.data.content);
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);
export const getCurrentStatus = createAsyncThunk(
  "adminOrders/getCurrentStatus",
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(`/api/v1/protected/orders/${id}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
        },
      });
      console.log(response.data.content);
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
    [getCurrentStatus.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.currentStatus = payload;
    },
    [getOrderHistory.fulfilled]: (state, { payload }) => {
      state.orderHistory = payload.content;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload.content;
    },
  },
});

export default adminOrdersSlice.reducer;
