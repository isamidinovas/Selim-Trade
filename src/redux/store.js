import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
});
