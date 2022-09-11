import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../redux/deleteModalSlice'
import editReducer from '../redux/editModalSlice'
import currTaskItem from '../redux/currTaskItem'
import currTodo from '../redux/currTodo'
import todoList from '../redux/todoList'

export default configureStore({
    reducer: {
        delete: deleteReducer,
        edit: editReducer,
        currTaskItem: currTaskItem,
        currTodo: currTodo,
        todoList: todoList
    },
})