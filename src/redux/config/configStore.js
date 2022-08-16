import { configureStore } from "@reduxjs/toolkit";
import users from '../modules/users';
import signup from '../modules/signup'
const store = configureStore({
  
  reducer: { users, signup} 
});

export default store;
