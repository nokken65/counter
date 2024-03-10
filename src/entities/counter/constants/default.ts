import type { Counter } from '../model/models'

const COUNTER_DEFAULT: Counter = {
  current: 0,
  settings: {
    start: 0,
    max: 5,
    step: 1
  }
} as const

export { COUNTER_DEFAULT }
