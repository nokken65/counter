import React from 'react'

import { MAX_COUNT, MIN_COUNT } from '@/shared/constants/counter'

import styles from './Counter.module.css'
import { CounterActions } from './CounterActions'
import { CounterDisplay } from './CounterDisplay'

const Counter = () => {
  const [count, setCount] = React.useState(MIN_COUNT)

  const handleIncrement = React.useCallback(() => {
    setCount((prev) => (count < MAX_COUNT ? prev + 1 : prev))
  }, [])

  const handleReset = React.useCallback(() => {
    setCount(MIN_COUNT)
  }, [])

  return (
    <div className={styles.counter}>
      <CounterDisplay count={count} />
      <CounterActions
        count={count}
        onIncrement={handleIncrement}
        onReset={handleReset}
      />
    </div>
  )
}

export { Counter }
