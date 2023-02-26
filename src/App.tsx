import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {BlogsPage} from "./features/blogs/blogsPage/BlogsPage";
import {Layout} from "./components/Layout";


function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<BlogsPage/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
