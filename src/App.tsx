import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {BlogsPage} from "./features/blogs/blogsPage/BlogsPage";
import {Layout} from "./components/layout/Layout";
import {AddBlogPage} from "./features/blogs/addBlogPage/AddBlogPage";
import {EditBlogPage} from "./features/blogs/editBlogPage/EditBlogPage";



function App() {
    debugger
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<BlogsPage/>}/>
                <Route path={'/blogs'} element={<BlogsPage/>}/>
                <Route path={'/blog/add'} element={<AddBlogPage/>}/>
                <Route path={'/blog/edit/:blogId'} element={<EditBlogPage/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
