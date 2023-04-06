import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";
import projectsSlice from "./admin/projectsSlice";
import newsSlice from "./admin/newsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    projects: projectsSlice,
    news: newsSlice,
  },
});
