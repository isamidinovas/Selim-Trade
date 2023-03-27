import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import { allNewsReducer } from "./user/AllNewsSlice";
import { newDetailReducer } from "./user/NewsDetailSlice";
import { newsReducer } from "./user/NewsSlice";
import { projectsReducer } from "./user/ProjectsSlice";
import { similarNewsReducer } from "./user/SimilarNewsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    allNews: allNewsReducer,
    news: newsReducer,
    newDetail: newDetailReducer,
    similarNews: similarNewsReducer,
    projects: projectsReducer,
  },
});
