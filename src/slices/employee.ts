import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '../types/employeeDataTypes'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'

// const initialState:Employee[]  = []

const employeeSlice = createSlice({
    name: "employeeData",
    initialState: { employees: [] },
    reducers: {

        populateData: (state, action) => {
            console.log('state', state);
            state.employees = action.payload
            // state.employeeArray
        },
        updateRecord: (state, action: PayloadAction) => {
            console.log('data sent', action.payload)
            // state.employeeArray
        },
        testMethod() {
            console.log('method working')
        }

    }

})

export const { populateData, updateRecord, testMethod } = employeeSlice.actions;
export const selectEmployees = (state: AppState) => state.employeeStore

export default employeeSlice.reducer;




