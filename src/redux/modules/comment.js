import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//코멘트 작성--->확인 완료
export const addComment = createAsyncThunk(
  "post/addComment",
  async (commentInput, thunkAPI) => {
    console.log(commentInput);
    try {
      const data = await axios
        .post("http://3.34.98.245/api/comment", commentInput, {
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

//코멘트 리스트 가져오기
export const getComment = createAsyncThunk(
  "comment/get",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://3.34.98.245/api/post/${payload}`
      );
      return response.data.data.comments;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

//코멘트 삭제 ---> 확인 완료
export const deleteComment = createAsyncThunk(
  "comment/delte",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://3.34.98.245/api/comment/${payload}`,
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
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.comments = [...state.comments, action.payload];
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
    [deleteComment.fulfilled]: (state, action) => {
      state.comments = state.comments.filter(
        (list) => list.id !== action.payload
      );
    },
  },
});
export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
