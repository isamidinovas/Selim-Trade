import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  news: [],
  isLoading: false,
};

export const createNewItem = createAsyncThunk(
  "news/createANewItem",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await customFetch.post("api/v1/protected/news", data, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          // "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewItem.fulfilled]: (state, payload) => {
      // state.news = [...state.news, payload];
    },
  },
});

export default newsSlice.reducer;
