import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/components/Button'
import { MAX_COUNT, MIN_COUNT } from '@/shared/constants/counter'

import styles from './CounterActions.module.css'

type CounterActionsProps = {
  count: number
  onIncrement: VoidFunction
  onReset: VoidFunction
}

const CounterActions = ({
  count,
  onIncrement,
  onReset
}: CounterActionsProps) => {
  const isMaxCount = count >= MAX_COUNT
  const isShouldDisableReset = count === MIN_COUNT

  const navigate = useNavigate()

  return (
    <div className={styles.actions}>
      <Button
        className={styles['actions_button']}
        disabled={isMaxCount}
        onClick={onIncrement}
      >
        inc
      </Button>
      <Button
        className={styles['actions_button']}
        disabled={isShouldDisableReset}
        onClick={onReset}
      >
        reset
      </Button>
      <Button
        className={styles['actions_button']}
        onClick={() => navigate('/counter/settings')}
      >
        set
      </Button>
    </div>
  )
}

export { CounterActions }
