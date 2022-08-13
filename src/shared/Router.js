import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from '../components/Post';
import Detail from '../components/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post' element={<Post/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
