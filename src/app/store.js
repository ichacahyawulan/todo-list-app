import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../redux/deleteModalSlice'
import currTaskItem from '../redux/currTaskItem'

export default configureStore({
    reducer: {
        delete: deleteReducer,
        currTaskItem: currTaskItem,
    },
})