import { configureStore } from "@reduxjs/toolkit";

import users from '../modules/users';
import posts from "../modules/postsSlice";
import signup from '../modules/signup'
import comments from '../modules/comment';
import success from '../modules/signup'
const store = configureStore({

  reducer: { users, signup, posts, comments, success}})

export default store;
