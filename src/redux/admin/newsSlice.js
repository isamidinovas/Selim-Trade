import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  news: [],
  isLoading: false,
};

export const getAllNews = createAsyncThunk(
  "news/getAllNews",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("api/v1/public/news");
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    }
  }
);
export const deleteANew = createAsyncThunk(
  "news/deleteANew",
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`api/v1/protected/news/${id}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
        },
      });
      return id;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);
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
    // CREATE NEW
    [createNewItem.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.news = [...state.news, payload];
      toast.success("Новость создана.");
    },
    [createNewItem.pending]: (state, payload) => {
      state.isLoading = true;
    },
    [createNewItem.rejected]: (state, payload) => {
      state.isLoading = false;
      toast.error("Error");
    },
    // GET NEWS
    [getAllNews.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.news = payload.content;
    },
    [getAllNews.pending]: (state) => {
      state.isLoading = true;
    },
    // DELETE NEW
    [deleteANew.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const itemId = payload;
      state.news = state.news.filter((item) => {
        return item.id !== itemId;
      });
      toast.success("Удалено.");
    },
    [deleteANew.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default newsSlice.reducer;
