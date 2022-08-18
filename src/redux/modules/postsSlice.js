import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//게시글 작성
export const addPost = createAsyncThunk(
  "post/addPost",
  async (inputs, thunkAPI) => {
    console.log(inputs);
    try {
      const data = await axios
        .post("http://3.34.98.245/api/post", inputs, {
          headers: {
            "Content-Type": "application/json",
            AccessToken: window.localStorage.getItem("login-token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 리스트 가져오기
export const getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://3.34.98.245/api/posts");
      // .then((response) => {
      //   console.log(response);
      // });
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//글 삭제
export const deletePost = createAsyncThunk(
  "post/delte",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://3.34.98.245/api/post/${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            AccessToken: window.localStorage.getItem("login-token"),
          },
        }
      );
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

//글 수정 확인---> 작성자만 수정가능
export const editPost = createAsyncThunk(
  "post/edit",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://3.34.98.245/api/post/${payload.postId}`,
        {
          title: payload.title,
          content: payload.content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            AccessToken: window.localStorage.getItem("login-token"),
          },
        }
      );
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

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
      state.posts = [action.payload, ...state.posts];
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((list) => list.id !== action.payload);
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = postsSlice.actions;
export default postsSlice.reducer;
