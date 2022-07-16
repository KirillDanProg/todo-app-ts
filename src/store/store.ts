import  todoReducer  from "./todoSlice";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})
