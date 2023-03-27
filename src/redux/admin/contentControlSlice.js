import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  projects: null,
};

export const createProject = createAsyncThunk(
  "contentControl/createProject",
  async (project, thunkAPI) => {
    try {
      const response = await customFetch.post(
        "api/v1/protected/projects",
        project,
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
export const getAllProjects = createAsyncThunk(
  "contentControl/getAllProjects",
  async (allProjects, thunkAPI) => {
    try {
      const response = await customFetch.get(
        "/api/v1/public/projects",
        allProjects,
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

const contentControlSlice = createSlice({
  name: "contentControl",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload.content;
      console.log(payload);
    },
  },
});

export default contentControlSlice.reducer;
