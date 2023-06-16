import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from './employeesAPI'

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        isLoading: true,
        data: []
        
    },
    reducers: {
        addEmployee(state, {payload: {name, surname, email, position}}) {
            state.data.unshift({
                id: new Date().getTime().toString(),
                name, surname, email, position
            })
        },
        deleteEmployee(state, {payload: {id}}) {
            state.data = [...state.data.filter(el => el.id !== id)]
        },
    },
    extraReducers: {
        [fetchEmployees.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [...payload]
        },
        [fetchEmployees.pending]: (state) => {
            state.isLoading = true
        }
    }
})

export const selectEmployees = state => state.employees

export const { addEmployee, deleteEmployee  } = employeesSlice.actions

export const employeesReducer = employeesSlice.reducer