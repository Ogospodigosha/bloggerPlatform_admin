import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {blogsReducer} from "../features/blogs/blogsPage/blogs-reducer";


const rootReducer = combineReducers({
    blogs: blogsReducer,
})
export type RootReducerType = typeof rootReducer
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})
export type AppRootState = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store