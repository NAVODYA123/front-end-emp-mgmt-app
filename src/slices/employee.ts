import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'

const employeeSlice = createSlice({
  name: 'employeeData',
  initialState: { employees: [] },
  reducers: {
    populateData: (state, action) => {
      console.log('state', state)
      state.employees = action.payload
    },
    updateRecord: (state, action: PayloadAction) => {
      console.log('data sent', action.payload)
    },
  },
})

export const { populateData, updateRecord } = employeeSlice.actions
export const selectEmployees = (state: AppState) => state.employeeStore

export default employeeSlice.reducer
