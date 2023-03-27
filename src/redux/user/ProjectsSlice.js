import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./UserThunk";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsPagList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projectsPagList = action.payload;
    });
  },
});

export const projectsReducer = projectsSlice.reducer;
