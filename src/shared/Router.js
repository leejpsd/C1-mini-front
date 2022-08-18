import React from "react";
import Main from "../components/Main";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Post from "../components/Post";
import Detail from "../components/Detail";
import Edit from "../components/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Post" element={<Post />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
