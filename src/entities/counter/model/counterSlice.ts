import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { lsApi } from '@/shared/api'

import { RootState } from '@/app/model/store'

const initialState: lsApi.Counter = {
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
      action: PayloadAction<Partial<lsApi.CounterSettings>>
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

export const selectors = {
  selectCurrentCount,
  selectSettings,
  selectIsStart,
  selectIsMax
}

export const actions = counterSlice.actions
export const reducer = counterSlice.reducer
export const name = counterSlice.name
