import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";
import projectsSlice from "./admin/projectsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    projects: projectsSlice,
  },
});
