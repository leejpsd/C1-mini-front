import { configureStore } from "@reduxjs/toolkit";

import users from '../modules/users';
import posts from "../modules/postsSlice";
import signup from '../modules/signup'
const store = configureStore({

  reducer: { users, signup, posts}})

export default store;
