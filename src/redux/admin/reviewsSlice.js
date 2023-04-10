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

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [createReview.fulfilled]: (state, { payload }) => {
      state.reviews = [...state.reviews, payload];
    },

    // [getAllProjects.fulfilled]: (state, { payload }) => {
    //   state.projects = payload.content;
    // },
  },
});

export default reviewsSlice.reducer;
