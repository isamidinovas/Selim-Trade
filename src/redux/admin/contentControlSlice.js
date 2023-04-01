import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  projects: [],
  copy: null,
};

export const createProject = createAsyncThunk(
  "contentControl/createProject",
  async (project, thunkAPI) => {
    console.log("🚀 ~ file: contentControlSlice.js:13 ~ project:", project);
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
      console.log(response);
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
export const deleteProject = createAsyncThunk(
  "contentControl/deleteProject",
  async (projectId, thunkAPI) => {
    try {
      const response = await customFetch.delete(
        `api/v1/protected/projects/${projectId}`,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      return projectId;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
export const updateProject = createAsyncThunk(
  "contentControl/updateProject",
  async ({ formData, id }, thunkAPI) => {
    console.log(id);
    try {
      const response = await customFetch.put(
        `api/v1/protected/projects/${id}`,
        formData,
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
    [createProject.fulfilled]: (state, { payload }) => {
      state.projects = [...state.projects, payload];
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      const id = payload;
      state.projects = [...state.projects, payload];

    },
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload.content;
    },
    [deleteProject.fulfilled]: (state, { payload }) => {
      const deletedElementId = payload;
      state.projects = state.projects.filter(
        (element) => element.id !== deletedElementId
      );
    },
  },
});

export default contentControlSlice.reducer;
