import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __postSignup = createAsyncThunk(
  "signup/postSignup",
  async (userInfo, thunkAPI) => {
    try {
      const data = await axios
        .post("http://3.34.98.245/user/signup", userInfo)
        .then((response) => {
          // if (response.data.error.code === "DUPLICATED_NICKNAME") {
          //   return alert("중복된 아이디입니다.");
          // }
          // document.location.href = "/login"; 
        })
            
      return thunkAPI.fulfillWithValue(data.data.success);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  success: [],
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__postSignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    
  },
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;
