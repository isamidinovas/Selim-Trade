import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  gateCategory: [],
};

export const createGareCategory = createAsyncThunk(
  "contentControl/createGateCategory",
  async (formData, thunkAPI) => {
    try {
      const response = await customFetch.post(
        "api/v1/protected/gate_category",
        formData,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getGateCategores = createAsyncThunk(
  "get/gateCategories",
  async () => {
    const response = await customFetch.get("api/v1/public/gate_category");
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data;
  }
);

const gateCategoriesSlice = createSlice({
  name: "gateCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [createGareCategory.fulfilled]: (state, { payload }) => {
      state.gateCategory = [...state.gateCategory, payload];
      toast.success("Новость создана.");
    },

    [getGateCategores.fulfilled]: (state, { payload }) => {
      state.gateCategory = payload;
    },
  },
});

export default gateCategoriesSlice.reducer;
