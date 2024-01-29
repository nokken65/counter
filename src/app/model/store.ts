import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const reducer = combineReducers({})

const store = configureStore({ reducer })

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
