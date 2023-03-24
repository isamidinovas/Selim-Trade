import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {};

// const { token } = useSelector((store) => store.admin);
// console.log("🚀 ~ file: contentControlSlice.js:7 ~ token:", token);
const contentControlSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default contentControlSlice.reducer;
