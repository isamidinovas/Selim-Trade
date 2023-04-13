import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  projects: [],
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

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [createProject.fulfilled]: (state, { payload }) => {
      state.projects = [...state.projects, payload];
      toast.success("Создана");
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      const updatedProject = payload;
      const updatedProjects = state.projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      );
      state.projects = updatedProjects;
      toast.success("Отредактирована");
    },
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload.content;
    },
    [deleteProject.fulfilled]: (state, { payload }) => {
      const deletedElementId = payload;
      state.projects = state.projects.filter(
        (element) => element.id !== deletedElementId
      );
      toast.success("Удалено");
    },
  },
});

export default projectsSlice.reducer;
