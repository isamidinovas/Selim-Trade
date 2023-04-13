import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
const initialState = {
  gates: [],
  isLoading: false,
  isEditing: false,
  full: false,
  singleGateId: null,
  updateValues: {
    saveDto: {
      name: "",
      categoryId: 1,
    },
    image: null,
  },
};

export const updateGateItem = createAsyncThunk(
  "news/updateGateItem",
  async ({ formData }, thunkAPI) => {
    try {
      const response = await customFetch.put(
        `api/v1/protected/gate`,
        formData,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().admin.token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

export const createGate = createAsyncThunk(
  "gates/createGate",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await customFetch.post("api/v1/protected/gate", data, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().admin.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

export const getGates = createAsyncThunk(
  "gates/getGates",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/api/v1/public/gate");
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteGate = createAsyncThunk(
  "gate/deleteGate",
  async (id, thunkAPI) => {
    try {
      const resp = await customFetch.delete(`/api/v1/protected/gate/${id}`, {
        headers: { authorization: `Bearer ${thunkAPI.getState().admin.token}` },
      });
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

const gateSlice = createSlice({
  name: "gate",
  initialState,
  reducers: {
    updateGate: (state, { payload }) => {
      const { name, image, categoryId } = payload;
      return {
        ...state,
        gates: [...state.gates],
        updateValues: {
          saveDto: {
            name,
            categoryId,
          },
          image,
        },
      };
    },

    changeEditingStatus: (state, { payload }) => {
      state.isEditing = payload;
    },
    getGateId: (state, { payload }) => {
      state.singleGateId = payload.id;
    },
  },
  extraReducers: {
    // Update
    [updateGateItem.fulfilled]: (state, { payload }) => {
      const updatedProject = payload;
      state.gates = state.gates.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      );
      toast.success("Отредактировано");
      state.full = !state.full;
    },
    // DELETE
    [deleteGate.fulfilled]: (state, { payload }) => {
      const idOfDeletedItem = payload;
      state.gates = state.gates.filter((gate) => {
        return gate.id !== idOfDeletedItem;
      });
      toast.success("Удалено");
    },
    // GET GATES
    [getGates.fulfilled]: (state, { payload }) => {
      state.gates = payload;
      state.isLoading = false;
    },
    [getGates.pending]: (state, _) => {
      state.isLoading = true;
    },
    // CREATE GATE
    [createGate.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.gates = [...state.gates, payload];
      state.isLoading = false;
      toast.success("Создано");
    },
    [createGate.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export const { updateGate, changeEditingStatus, getGateId } = gateSlice.actions;
export default gateSlice.reducer;
