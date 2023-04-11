import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
const initialState = {
  gates: [],
  isLoading: false,
};

export const createGate = createAsyncThunk(
  "gates/createGate",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await customFetch.post("api/v1/protected/gate", data, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

export const getGates = createAsyncThunk(
  "gates/getGates",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/api/v1/public/gate");
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const gateSlice = createSlice({
  name: "gate",
  initialState,
  reducers: {},
  extraReducers: {
    // GET GATES
    [getGates.fulfilled]: (state, { payload }) => {
      state.gates = payload;
      state.isLoading = false;
    },
    [getGates.pending]: (state, _) => {
      state.isLoading = true;
    },
    // CREATE GATE
    [createGate.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.gates = [...state.gates, payload];
      state.isLoading = false;
      toast.success("Создано");
    },
    [createGate.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default gateSlice.reducer;
