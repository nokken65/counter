type CounterSettings = {
  start: number
  max: number
  step: number
}

type Counter = {
  current: number
  settings: CounterSettings
}

export type { Counter, CounterSettings }
