import {configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {Action} from 'redux'
import employeeReducer from '../slices/employee'

 const createStore = ()=> configureStore({
  reducer: {
    employeeStore:employeeReducer,
  },
  devTools:true
})

export type AppStore = ReturnType<typeof createStore>

export type AppState = ReturnType<AppStore['getState']>

export type AppThunk<ReturnType=void>= ThunkAction<ReturnType,AppState,unknown,Action>

export const warpper = createWrapper<AppStore>(createStore)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch