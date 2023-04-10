import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  news: [],
  singleNew: [],
  isEditing: false,
  isLoading: false,
  newsUpdateValues: {
    saveDto: {
      title: "",
      text: "",
    },
    coverImage: null,
    contentImage: null,
  },
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
export const getNewById = createAsyncThunk(
  "news/getNewById",
  async ({ id }, thunkAPI) => {
    try {
      const resp = await customFetch.get(`api/v1/public/news/${id}`);
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
  async ({ formData }, thunkAPI) => {
    console.log(formData);
    try {
      const response = await customFetch.post(
        "api/v1/protected/news",
        formData,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);
export const updateNewItem = createAsyncThunk(
  "news/updateNewItem",
  async ({ formData, id }, thunkAPI) => {
    console.log(formData);
    try {
      const response = await customFetch.put(
        `api/v1/protected/news/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log(response.data);
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
  reducers: {
    updateNew: (state, { payload }) => {
      const { title, text, coverImage } = payload;
      return {
        ...state,
        news: [...state.news],
        // singleNew: [...state.singleNew],
        newsUpdateValues: {
          saveDto: {
            title,
            text,
          },
          coverImage,
        },
      };
    },
    changeEditingStatus: (state, { payload }) => {
      state.isEditing = state.isEditing = payload;
    },
  },
  extraReducers: {
    [updateNewItem.fulfilled]: (state, { payload }) => {
      const updatedItem = payload;
      const updatedProjects = state.news.map((project) =>
        project.id === updatedItem.id ? updatedItem : project
      );
      state.news = updatedProjects;
      toast.success("Отредактированно.");
    },
    // NEW BY ID
    [getNewById.fulfilled]: (state, { payload }) => {
      state.singleNew = payload;
    },
    // CREATE NEW
    [createNewItem.fulfilled]: (state, { payload }) => {
      console.log(payload);
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

export const { updateNew, changeEditingStatus } = newsSlice.actions;
export default newsSlice.reducer;
