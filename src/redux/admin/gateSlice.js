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
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

const gateSlice = createSlice({
  name: "gate",
  initialState,
  reducers: {},
  extraReducers: {
    [createGate.fulfilled]: (state, { payload }) => {
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
