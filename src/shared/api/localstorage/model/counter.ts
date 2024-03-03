type CounterSettings = {
  start: number
  max: number
}

type Counter = {
  current: number
  settings: CounterSettings
}

export type { Counter, CounterSettings }
