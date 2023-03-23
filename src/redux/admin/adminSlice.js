import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
      const response = await customFetch.post(
        "api/v1/public/auth/register",
        adminData
      );
      return response.data;
    } catch (error) {
      if (error.response.data.errors.password) {
        return thunkAPI.rejectWithValue(error.response.data.errors.password);
      }
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
    // REGISTER
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token || null;
      console.log(state.token);
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log("request rejected");
      toast.error(payload);
    },
  },
});

export default adminSlice.reducer;
export const { inc } = adminSlice.actions;
