import { createSlice } from '@reduxjs/toolkit'

export const currTodo = createSlice({
    name: 'currTodo',
    initialState: {
        value: 0,
    },
    reducers: {
        setCurrTodo: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setCurrTodo } = currTodo.actions

export default currTodo.reducer