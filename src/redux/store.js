import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import { newDetailReducer } from "./user/NewsDetailSlice";
import { newsPaginationReducer } from "./user/NewsPaginationSlice";
import { newsReducer } from "./user/NewsSlice";
import { projectsPaginationReducer } from "./user/ProjectsPaginationSlice";
import { projectsReducer } from "./user/ProjectsSlice";
import { similarNewsReducer } from "./user/SimilarNewsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    news: newsReducer,
    newsPagination: newsPaginationReducer,
    newDetail: newDetailReducer,
    similarNews: similarNewsReducer,
    projectsPagination: projectsPaginationReducer,
    projects: projectsReducer,
  },
});
