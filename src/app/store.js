import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../redux/deleteModalSlice'
import currTaskItem from '../redux/currTaskItem'
import editReducer from '../redux/editModalSlice'

export default configureStore({
    reducer: {
        delete: deleteReducer,
        currTaskItem: currTaskItem,
        edit: editReducer
    },
})