import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  news: [],
  isLoading: false,
};

export const createNewItem = createAsyncThunk(
  "news/createANewItem",
  async (data, thunkAPI) => {
    try {
      const response = await customFetch.post("api/v1/protected/news", data, {
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

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewItem.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.news = [...state.news, payload];
      toast.success("Новость создана.");
    },
    [createNewItem.pending]: (state, payload) => {
      state.isLoading = true;
    },
    [createNewItem.rejected]: (state, payload) => {
      state.isLoading = false;
      toast.success("Error");
    },
  },
});

export default newsSlice.reducer;
