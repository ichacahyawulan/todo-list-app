import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../redux/deleteModalSlice'
import editReducer from '../redux/editModalSlice'
import currTaskItem from '../redux/currTaskItem'
import currTodo from '../redux/currTodo'

export default configureStore({
    reducer: {
        delete: deleteReducer,
        edit: editReducer,
        currTaskItem: currTaskItem,
        currTodo: currTodo
    },
})