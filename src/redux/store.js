import { configureStore } from "@reduxjs/toolkit";
import { gatesReducer } from "./user/GatesSlice";
import { newDetailReducer } from "./user/NewsDetailSlice";
import { newsPaginationReducer } from "./user/NewsPaginationSlice";
import { ordersReducer } from "./user/OrderSlice";
import { projectsPaginationReducer } from "./user/ProjectsPaginationSlice";
import { projectsListReducer } from "./user/ProjectsSlice";
import { reviewsReducer } from "./user/ReviewsSlice";
import { similarNewsReducer } from "./user/SimilarNewsSlice";
import { gateInfoReducer } from "./user/GetGateInfoSlice";
import adminSlice from "./admin/adminSlice";
import projectsSlice from "./admin/projectsSlice";
import { newsListReducer } from "./user/NewsSlice";
import newsSlice from "./admin/newsSlice";
export const store = configureStore({
  reducer: {
    admin: adminSlice,
    projects: projectsSlice,
    news: newsSlice,
    newsList: newsListReducer,
    newsPagination: newsPaginationReducer,
    newDetail: newDetailReducer,
    similarNews: similarNewsReducer,
    projectsPagination: projectsPaginationReducer,
    projectsList: projectsListReducer,
    gates: gatesReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
    gateInfo: gateInfoReducer,
  },
});
