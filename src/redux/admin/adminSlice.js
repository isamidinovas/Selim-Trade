import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  token: "null",
  isLoading: "false",
};

export const register = createAsyncThunk(
  "admin/register",
  async (adminData, thunkAPI) => {
    console.log("🚀 ~ file: adminSlice.js:12 ~ adminData:", adminData);
    try {
      const response = await customFetch.post("auth/register", adminData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      console.log(state.token);
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
      console.log("request rejected");
    },
  },
});

export default adminSlice.reducer;
export const { inc } = adminSlice.actions;
