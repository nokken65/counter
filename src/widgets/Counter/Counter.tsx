import { useNavigate } from 'react-router-dom'

import { CounterDisplay } from '@/entities/counter'
import { IncrementCounter } from '@/features/increment-counter'
import { ResetCounter } from '@/features/reset-counter'
import { Button } from '@/shared/components/Button'

import styles from './Counter.module.css'

const Counter = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.counter}>
      <CounterDisplay />

      <div className={styles.actions}>
        <IncrementCounter />
        <ResetCounter />
        <Button
          onClick={() => {
            navigate('/settings')
          }}
        >
          settings
        </Button>
      </div>
    </div>
  )
}

export { Counter }
