import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { counterModel } from '@/entities/counter'
import { listenerMiddleware } from '@/shared/middlewares/listener'

const reducer = combineReducers({
  [counterModel.name]: counterModel.reducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
  type AppDispatch,
  type RootState,
  store,
  useAppDispatch,
  useAppSelector
}
