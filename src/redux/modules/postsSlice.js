import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const addPost = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://3.36.64.146/api/post", payload)
      .then((response) => {
        console.log(response)
        // const { accessToken } = response.data
        // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        // 우선 이대로 토큰이 보내지는지 확인해보고 안되면 주석풀기 (로그인때 보낸걸로 되나 궁금)
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addImg = createAsyncThunk(
  "post/addImg",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.post("http://localhost:3001/post", payload)
      .then((response) => {
        console.log(response)
        // const { accessToken } = response.data
        // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        // 우선 이대로 토큰이 보내지는지 확인해보고 안되면 주석풀기 로그인때 보낸걸로 되나 궁금
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      state.posts=[...state.posts,action.payload];
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
