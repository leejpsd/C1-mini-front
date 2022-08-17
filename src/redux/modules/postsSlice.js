import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

axios.defaults.baseURL = "http://3.34.98.245";
let token = localStorage.getItem("AccessToken") || "";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const response = await axios.post(
        "/api/post",
        {
          title: payload.title,
          content: payload.content,
          imgUrl: payload.imgUrl,
          category: payload.category,
        },
        {
          headers: {
            AccessToken: token,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
