import { createSlice } from '@reduxjs/toolkit'

export const currTaskItem = createSlice({
    name: 'currTaskItem',
    initialState: {
        value: 0,
    },
    reducers: {
        setCurrTaskItem: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setCurrTaskItem } = currTaskItem.actions

export default currTaskItem.reducer