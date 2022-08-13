import React from "react";
import Main from '../components/Main';
import Login from '../components/Login'
import Signup from '../components/Signup';
import Post from '../components/Post';
import Detail from '../components/Detail';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Signup' element={<Signup />}/>
        <Route path='Post' element={<Post />}/>
        <Route path='Detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  ); 
};

export default Router;
