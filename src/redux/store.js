import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./admin/adminSlice";
import { gatesReducer } from "./user/GatesSlice";
import { newDetailReducer } from "./user/NewsDetailSlice";
import { newsPaginationReducer } from "./user/NewsPaginationSlice";
import { newsReducer } from "./user/NewsSlice";
import { ordersReducer } from "./user/OrderSlice";
import { projectsPaginationReducer } from "./user/ProjectsPaginationSlice";
import { projectsReducer } from "./user/ProjectsSlice";
import { reviewsReducer } from "./user/ReviewsSlice";
import { similarNewsReducer } from "./user/SimilarNewsSlice";
import { gateInfoReducer } from "./user/GetGateInfoSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    news: newsReducer,
    newsPagination: newsPaginationReducer,
    newDetail: newDetailReducer,
    similarNews: similarNewsReducer,
    projectsPagination: projectsPaginationReducer,
    projects: projectsReducer,
    gates: gatesReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
    gateInfo: gateInfoReducer,
  },
});
