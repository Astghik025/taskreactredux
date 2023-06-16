import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from './tasksAPI'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        isLoading: true,
        data: []
        
    },
    reducers: {
       
    },
    extraReducers: {
        [fetchTasks.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [...payload]
        },
        [fetchTasks.pending]: (state) => {
            state.isLoading = true
        }
    }
})

export const selectTasks = state => state.tasks

export const {} = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer