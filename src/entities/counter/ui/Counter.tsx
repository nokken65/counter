import styles from './Counter.module.css'
import { CounterActions } from './CounterActions'
import { CounterDisplay } from './CounterDisplay'

const Counter = () => {
  return (
    <div className={styles.counter}>
      <CounterDisplay />
      <CounterActions />
    </div>
  )
}

export { Counter }
