import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  saveTokenToLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  token: getTokenFromLocalStorage(),
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
export const logIn = createAsyncThunk(
  "admin/login",
  async (adminData, thunkAPI) => {
    try {
      const response = await customFetch.post(
        "api/v1/public/auth/login",
        adminData
      );
      // localStorage.setItem("token", response.data.token);
      // console.log("took", response.data);
      return response.data;
    } catch (error) {
      return error;
      // toast.error("hi");
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOut: (state) => {
      toast.success("Log Out");
      state.token = null;
      removeTokenFromLocalStorage();
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
      toast.error(payload);
    },
    // LOGIN
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token || null;
      saveTokenToLocalStorage(payload.token);
      console.log("token", payload.token);
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Не верный пользователь");
    },
  },
});

export const { logOut } = adminSlice.actions;
export default adminSlice.reducer;
