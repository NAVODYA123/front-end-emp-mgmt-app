import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux'
import employeeReducer from './slices/employee'

const createStore = () => configureStore({
  reducer: {
    employeeStore: employeeReducer,
  },
  devTools: true
})

export type AppStore = ReturnType<typeof createStore>

export type AppState = ReturnType<AppStore['getState']>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const warpper = createWrapper<AppStore>(createStore)
