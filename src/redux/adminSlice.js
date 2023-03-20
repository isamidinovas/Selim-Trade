import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastName: "",
  firstName: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  role: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1;
    },
  },
});

export default adminSlice.reducer;
export const { inc } = adminSlice.actions;
