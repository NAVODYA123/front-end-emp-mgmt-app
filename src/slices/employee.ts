import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store/store'

const employeeSlice = createSlice({
  name: 'employeeData',
  initialState: { employees: [], sortedEmpArray: [], loadingState: false },
  reducers: {
    populateData: (state, action) => {
      state.employees = action.payload
    },
    applySearchAndSort: (state, action) => {
      state.sortedEmpArray = action.payload
    },
    setLoadingState :( state, action)=> {
      state.loadingState = action.payload
    }
  },
})

export const { populateData, applySearchAndSort, setLoadingState } = employeeSlice.actions
export const selectEmployees = (state: AppState) => state.employeeStore

export default employeeSlice.reducer
