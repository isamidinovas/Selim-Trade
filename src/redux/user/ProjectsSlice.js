import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./UserThunk";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projectsList = action.payload;
    });
  },
});

export const projectsReducer = projectsSlice.reducer;
