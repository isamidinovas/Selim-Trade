import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  reviews: [],
};

export const createReview = createAsyncThunk(
  "contentControl/createReview",
  async (review, thunkAPI) => {
    try {
      const response = await customFetch.post(
        "api/v1/protected/review",
        review,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);


export const deleteReview = createAsyncThunk(
  "contentControl/deleteReview",
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(
        `api/v1/protected/review/${id}`,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      return id;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [createReview.fulfilled]: (state, { payload }) => {
      state.reviews = [...state.reviews, payload];
    },
  
  },
});

export default reviewsSlice.reducer;
