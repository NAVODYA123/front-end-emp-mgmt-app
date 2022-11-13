import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store/store'

const employeeSlice = createSlice({
  name: 'employeeData',
  initialState: { employees: [], sortedEmpArray: [] },
  reducers: {
    populateData: (state, action) => {

      state.employees = action.payload
    },
    applySearchAndSort: (state, action) => {
      state.sortedEmpArray = action.payload
    }

  },
})

export const { populateData, applySearchAndSort } = employeeSlice.actions
export const selectEmployees = (state: AppState) => state.employeeStore

export default employeeSlice.reducer
