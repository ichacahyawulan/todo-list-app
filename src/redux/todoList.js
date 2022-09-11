import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
    name: 'todoList',
    initialState: {
        value: [],
    },
    reducers: {
        setTodoList: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setTodoList } = todoList.actions

export default todoList.reducer