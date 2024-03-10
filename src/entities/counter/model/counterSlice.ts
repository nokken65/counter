import { createSelector, createSlice } from '@reduxjs/toolkit'
import { equals } from 'ramda'
import type { AppDispatch, RootState } from '@/app/model/store'
import type { PayloadAction } from '@reduxjs/toolkit'

import { listenerMiddleware } from '@/shared/middlewares/listener'

import { COUNTER_DEFAULT } from '../constants/default'
import type { Counter, CounterSettings } from './models'

const initialState: Counter =
  JSON.parse(localStorage.getItem('counter') ?? 'null') ?? COUNTER_DEFAULT

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      const prevValue = state.current - state.settings.step
      state.current =
        prevValue < state.settings.start ? state.settings.start : prevValue
    },
    increment: (state) => {
      const nextValue = state.current + state.settings.step
      state.current =
        nextValue > state.settings.max ? state.settings.max : nextValue
    },
    reset: (state) => {
      state.current = state.settings.start
    },
    updateSettings: (
      state,
      action: PayloadAction<Partial<CounterSettings>>
    ) => {
      state.settings = { ...state.settings, ...action.payload }

      if (
        action.payload.start !== undefined &&
        state.current < action.payload.start
      ) {
        state.current = action.payload.start
      }

      if (
        action.payload.max !== undefined &&
        state.current > action.payload.max
      ) {
        state.current = action.payload.max
      }
    }
  }
})

const selectSelf = (state: RootState) => state.counter

const selectCurrentCount = createSelector(
  selectSelf,
  (counter) => counter.current
)

const selectSettings = createSelector(selectSelf, (counter) => counter.settings)

const selectIsStart = createSelector(
  selectSelf,
  (counter) => counter.current === counter.settings.start
)

const selectIsMax = createSelector(
  selectSelf,
  (counter) => counter.current === counter.settings.max
)

const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>()

startAppListening({
  predicate: (_action, currentState, previousState) => {
    return !equals(currentState.counter, previousState.counter)
  },
  effect: (_action, api) => {
    localStorage.setItem('counter', JSON.stringify(api.getState().counter))
  }
})

export const selectors = {
  selectCurrentCount,
  selectSettings,
  selectIsStart,
  selectIsMax
}

export const actions = counterSlice.actions
export const reducer = counterSlice.reducer
export const name = counterSlice.name
