import { createSelector, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/app/model/store'

type Settings = {
  min: number
  max: number
}

type Counter = {
  current: number
  settings: Settings
}

const initialState: Counter = {
  current: 0,
  settings: {
    min: 0,
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
    decrement: (state) => {
      if (state.current > state.settings.min) {
        state.current -= 1
      }
    },
    reset: (state) => {
      state.current = 0
    }
  }
})

const selectSelf = (state: RootState) => state.counter

const selectCurrentCount = createSelector(
  selectSelf,
  (counter) => counter.current
)

const selectIsMin = createSelector(
  selectSelf,
  (counter) => counter.current === counter.settings.min
)

const selectIsMax = createSelector(
  selectSelf,
  (counter) => counter.current === counter.settings.max
)

export const selectors = {
  selectCurrentCount,
  selectIsMin,
  selectIsMax
}

export const actions = counterSlice.actions
export const reducer = counterSlice.reducer
export const name = counterSlice.name
