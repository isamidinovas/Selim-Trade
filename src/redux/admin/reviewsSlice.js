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
      console.log("res", response.data);
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

export const editReview = createAsyncThunk(
  "contentControl/editReview",
  async (review, thunkAPI) => {
    try {
      const response = await customFetch.put(
        "api/v1/protected/review",
        review,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getReviews = createAsyncThunk("get/reviews", async () => {
  const response = await customFetch.get("api/v1/public/review");
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [createReview.fulfilled]: (state, { payload }) => {
      state.reviews = [...state.reviews, payload];
    },
    [deleteReview.fulfilled]: (state, { payload }) => {
      state.reviews = state.reviews.filter((review) => review.id !== payload);
    },
    [getReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload;
    },
    [editReview.fulfilled]: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export default reviewsSlice.reducer;
