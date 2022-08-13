import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
  coments:[],
  isLoading:false,
  error:null,
};


export const addComment = createAsyncThunk(
  "post/addComment",
  async(payload, thunkAPI)=>{
    try{
    const data=await axios.post("http://localhost:3001/comment",payload);
    return thunkAPI.fulfillWithValue(data.data);}
    catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const getComment = createAsyncThunk(
  "get/getComment",
  async(payload, thunkAPI)=>{
    try{
    const data=await axios.get("http://localhost:3001/comment");
    return thunkAPI.fulfillWithValue(data.data);}
    catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteComment = createAsyncThunk(
  "delete/deleteComment",
  async(payload, thunkAPI)=>{
    try{
    const data=await axios.get("http://localhost:3001/comment");
    return thunkAPI.fulfillWithValue(data.data);}
    catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const putComment = createAsyncThunk(
  "put/putComment",
  async(payload, thunkAPI)=>{
    try{
    const data=await axios.get("http://localhost:3001/comment");
    return thunkAPI.fulfillWithValue(data.data);}
    catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.pending]: (state)=>{
      state.isLoading=true;
    },
    [addComment.fulfilled]: (state, action)=>{
      state.isLoading=false;
      state.posts=[...state.coments,action.payload];
    },
    [addComment.rejected]: (state, action)=>{
      state.isLoading=false;
      state.error=action.payload;
    },
    [getComment.pending]: (state)=>{
      state.isLoading=true;
    },
    [getComment.fulfilled]: (state, action)=>{
      state.isLoading=false;
      state.posts=action.payload;
    },
    [getComment.rejected]: (state, action)=>{
      state.isLoading=false;
      state.error=action.payload;
    }
  },
});

export default commentsSlice.reducer
