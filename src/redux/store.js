import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";
import contentControlSlice from "./admin/contentControlSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    contentControl: contentControlSlice,
  },
});
