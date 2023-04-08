import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("get/news", async ({ page, size }) => {
  const response = await axios.get(
    `http://161.35.29.179:8090/api/v1/public/news?page=${page}&size=${size}&sort=publishedDate,desc`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});

export const getNewsPag = createAsyncThunk("get/newspag", async () => {
  const response = await axios.get(
    "http://161.35.29.179:8090/api/v1/public/news?page=0&size=3&sort=publishedDate,desc"
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});

export const getNewDetail = createAsyncThunk("get/new", async (id) => {
  const response = await axios.get(
    `http://161.35.29.179:8090/api/v1/public/news/${id}`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const getSimilarNews = createAsyncThunk(
  "get/similarnews",
  async (id) => {
    const response = await axios.get(
      `http://161.35.29.179:8090/api/v1/public/news/${id}/similar-news?`
    );
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data;
  }
);

export const getProjectsPagination = createAsyncThunk(
  "get/projects",
  async () => {
    const response = await axios.get(
      "http://161.35.29.179:8090/api/v1/public/projects"
    );
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data.content;
  }
);

export const getProjects = createAsyncThunk("get/projects", async () => {
  const response = await axios.get(
    `http://161.35.29.179:8090/api/v1/public/projects?sort=publishedDate,desc`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});

export const getGates = createAsyncThunk("get/gates", async () => {
  const response = await axios.get(
    "http://161.35.29.179:8090/api/v1/public/gate_category"
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const getGatesPagination = createAsyncThunk("get/gates", async () => {
  const response = await axios.get(
    "http://161.35.29.179:8090/api/v1/public/gate_category/{pageNumber}/{pageSize}/{sortDirection}/{sortField}"
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});
export const getGateInfo = createAsyncThunk("get/gateInfo", async (id) => {
  const response = await axios.get(
    `http://161.35.29.179:8090/api/v1/public/gate_category/${id}`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});
export const getReviews = createAsyncThunk("get/reviews", async () => {
  const response = await axios.get(
    "http://161.35.29.179:8090/api/v1/public/review"
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const orderCreate = createAsyncThunk(
  "order/create",
  async (formData) => {
    const response = await axios.post(
      "http://161.35.29.179:8090/api/v1/public/orders",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data.content;
  }
);
