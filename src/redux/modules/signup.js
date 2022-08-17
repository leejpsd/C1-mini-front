import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const __postSignup = createAsyncThunk(
  "signup/postSignup",
  async (userInfo, thunkAPI) => { 
    
    try {
      const data = await axios.post("http://3.34.98.245/user/signup", userInfo) 
      
      .then(response => {console.log(response)
        if (response.data.success === true) {
          return alert('회원가입 성공!');
        }
        if (response.MESSAGE === 'USERNAME ALREADY EXISTS') {
          return alert('이미 존재하는 아이디입니다');
        }
        if (response.MESSAGE === 'NICKNAME ALREADY EXISTS') {
          return alert('이미 존재하는 닉네임입니다');
        }
        
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  signup: [], 
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
  },
  extraReducers: {
  },
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;