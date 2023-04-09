import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./UserThunk";

export const projectsListSlice = createSlice({
  name: "projectsList",
  initialState: {
    projectsList: [],
    isloading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projectsList = action.payload;
      state.isloading = false;
    });
  },
});

export const projectsListReducer = projectsListSlice.reducer;
