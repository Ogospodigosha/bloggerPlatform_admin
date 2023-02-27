import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {BlogsPage} from "./features/blogs/blogsPage/BlogsPage";
import {Layout} from "./components/Layout";
import {AddBlogPage} from "./features/blogs/addBlogPage/AddBlogPage";



function App() {
    debugger
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<BlogsPage/>}/>
                <Route path={'/blogs'} element={<BlogsPage/>}/>
                <Route path={'/blog/add'} element={<AddBlogPage/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
