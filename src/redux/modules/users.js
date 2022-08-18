import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCookies } from "react-cookie";

export const __postUsers = createAsyncThunk(
  "users/postUsers",
  async (userInfo, thunkAPI) => {
    try {
      const data = await axios
        .post("http://3.34.98.245/user/login", userInfo)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem(
            "login-token",
            response.headers.accesstoken
          );
          if (response.data.success === false) {
            return alert("사용자를찾을수없습니다!");
          }
        });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUsers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [__postUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [__postUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
