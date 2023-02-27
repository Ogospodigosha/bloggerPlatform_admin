import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {BlogsPage} from "./features/blogs/blogsPage/BlogsPage";
import {Layout} from "./components/Layout";
import {AddBlog} from "./features/blogs/blogsPage/addBlog/AddBlog";


function App() {
    debugger
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<BlogsPage/>}/>
                <Route path={'/blogs'} element={<BlogsPage/>}/>
                <Route path={'/blog/add'} element={<AddBlog/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
