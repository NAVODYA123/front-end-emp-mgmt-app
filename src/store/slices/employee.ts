import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'

const employeeSlice = createSlice({
  name: 'employeeData',
  initialState: { employees: [], sortedEmpArray: [], loadingState: false },
  reducers: {
    //// populate data to employee list
    populateData: (state, action) => {
      state.employees = action.payload
    },
    //// populate data to sorted and/or filtered employee list
    applySearchAndSort: (state, action) => {
      state.sortedEmpArray = action.payload
    },
    //// set global state for loading
    setLoadingState :( state, action)=> {
      state.loadingState = action.payload
    }
  },
})

export const { populateData, applySearchAndSort, setLoadingState } = employeeSlice.actions
export const selectEmployees = (state: AppState) => state.employeeStore

export default employeeSlice.reducer
