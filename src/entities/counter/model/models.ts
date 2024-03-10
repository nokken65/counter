import type { NUMERAL_SYSTEM } from '@/shared/constants'

type CounterSettings = {
  start: number
  max: number
  step: number
  numeralSystem: (typeof NUMERAL_SYSTEM)[number]
}

type Counter = {
  current: number
  settings: CounterSettings
}

export type { Counter, CounterSettings }
