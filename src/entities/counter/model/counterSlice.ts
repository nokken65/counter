import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { equals } from 'ramda'

import { AppDispatch, RootState } from '@/app/model/store'
import { listenerMiddleware } from '@/shared/middlewares/listener'

import { Counter, CounterSettings } from './models'

const initialState: Counter = JSON.parse(
  localStorage.getItem('counter') ?? 'null'
) ?? {
  current: 0,
  settings: {
    start: 0,
    max: 5
  }
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.current < state.settings.max) {
        state.current += 1
      }
    },
    reset: (state) => {
      state.current = 0
    },
    updateSettings: (
      state,
      action: PayloadAction<Partial<CounterSettings>>
    ) => {
      state.settings = { ...state.settings, ...action.payload }

      if (action.payload.start && state.current < action.payload.start) {
        state.current = action.payload.start
      }

      if (action.payload.max && state.current > action.payload.max) {
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
  predicate: (_action, currentState, previousState) =>
    !equals(currentState.counter, previousState.counter),
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