import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";
import { gatesReducer } from "./user/GatesSlice";
import { newDetailReducer } from "./user/NewsDetailSlice";
import { newsPaginationReducer } from "./user/NewsPaginationSlice";
import { ordersReducer } from "./user/OrderSlice";
import { projectsPaginationReducer } from "./user/ProjectsPaginationSlice";
import { projectsListReducer } from "./user/ProjectsSlice";
import { reviewsListReducer } from "./user/ReviewsSlice";
import { similarNewsReducer } from "./user/SimilarNewsSlice";
import { gateInfoReducer } from "./user/GetGateInfoSlice";
import projectsSlice from "./admin/projectsSlice";
import { newsListReducer } from "./user/NewsSlice";
import newsSlice from "./admin/newsSlice";
import reviewsSlice from "./admin/reviewsSlice";
import { gatesPaginationReducer } from "./user/GetGatesPagination";
import gateCategoriesSlice from "./admin/gateCategorySlice";
export const store = configureStore({
  reducer: {
    admin: adminSlice,
    projects: projectsSlice,
    news: newsSlice,
    reviews: reviewsSlice,
    gateCategories: gateCategoriesSlice,
    newsList: newsListReducer,
    newsPagination: newsPaginationReducer,
    newDetail: newDetailReducer,
    similarNews: similarNewsReducer,
    projectsPagination: projectsPaginationReducer,
    projectsList: projectsListReducer,
    gates: gatesReducer,
    reviewsList: reviewsListReducer,
    orders: ordersReducer,
    gateInfo: gateInfoReducer,
    gatesPagination: gatesPaginationReducer,
  },
});
