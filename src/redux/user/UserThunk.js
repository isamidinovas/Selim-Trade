import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("get/news", async ({ page, size }) => {
  const response = await axios.get(
    `http://198.199.91.23/api/v1/public/news?page=${page}&size=${size}&sort=publishedDate,desc`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});

export const getNewsPag = createAsyncThunk("get/newspag", async () => {
  const response = await axios.get(
    "http://198.199.91.23/api/v1/public/news?page=0&size=3&sort=publishedDate,desc"
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data.content;
});

export const getNewDetail = createAsyncThunk("get/new", async (id) => {
  const response = await axios.get(
    `http://198.199.91.23/api/v1/public/news/${id}`
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
      `http://198.199.91.23/api/v1/public/news/${id}/similar-news?`
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
      "http://198.199.91.23/api/v1/public/projects?page=0&size=5"
    );
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data.content;
  }
);

export const getProjects = createAsyncThunk(
  "get/projects",
  async ({ page, size, totalPages }) => {
    const response = await axios.get(
      // "http://198.199.91.23/api/v1/public/projects"
      `http://198.199.91.23/api/v1/public/projects?page=${page}&size=${size}&totalPages=${totalPages}`
    );
    if (!response.status) {
      throw new Error("Server error");
    }
    return response.data.content;
  }
);
