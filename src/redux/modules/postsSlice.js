import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "http://3.34.98.245";
// let token = localStorage.getItem("AccessToken") || "";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (inputs, thunkAPI) => {
    console.log(inputs)
    try {
      const data = await axios.post("http://3.34.98.245/api/post", inputs,
      {
        headers: {
          'Content-Type': 'application/json',
          AccessToken: window.localStorage.getItem('login-token'),
        },
        }
      
      )
      .then((response) => {
        console.log(response)
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://3.34.98.245/api/posts")
      .then((response) => {
        console.log(response)
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3002/users/${id}`);
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
  reducers: {
  },
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


  },
});
export const {} = postsSlice.actions;
export default postsSlice.reducer;
