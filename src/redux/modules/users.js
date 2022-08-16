import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCookies } from 'react-cookie'

// export const __getUsers = createAsyncThunk(
//   "users/getUsers",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("http://localhost:3001/todos");
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __postUsers = createAsyncThunk(
  "users/postUsers",
  async (userInfo, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3002/users", userInfo)
      .then((response) => {
        console.log(response)
        
        const { accessToken } = response.data

        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

        // const accessToken = response.data.token;
        // setCookie("is_login", `${accessToken}`);
        // document.location.href = "/";
        // localStorage.setItem('refreshToken',response.data['refreshTokentoken'])
        // document.location.href = "/";
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  // async (userInfo, thunkAPI) => {
  //   try {
  //     onSilentRefresh = () => {
  //     await axios.post('/silent-refresh', userInfo)
  //     .then(onLoginSuccess)
  //   }
  //     return thunkAPI.fulfillWithValue(data.data);
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error);
  //   }
  // }

);


const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: {
    // [__getTodos.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getTodos.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todos = action.payload;
    // },
    // [__getTodos.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [__postUsers.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todos = action.payload;
    // },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;