import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const addComment = createAsyncThunk(
  "Comment/addComment",
  async (commentInput, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3002/commnets", commentInput)
      .then((response) => {
        console.log(response)
        // const { accessToken } = response.data
        // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        // 우선 이대로 토큰이 보내지는지 확인해보고 안되면 주석풀기 (로그인때 보낸걸로 되나 궁금)
      })
      return thunkAPI.fulfillWithValue(commentInput);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getComment = createAsyncThunk(
  "Comment/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "http://localhost:3002/commnets"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
  },
  extraReducers: {
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.comments=[...state.comments,action.payload];
    },
    [addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getComment.pending]: (state) => {
      state.isLoading = true; 
    },
    [getComment.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.comments = action.payload; 
    },
    [getComment.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },


  },
});
export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
