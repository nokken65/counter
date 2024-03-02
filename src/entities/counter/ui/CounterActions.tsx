import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { Button } from '@/shared/components/Button'

import { actions, selectors } from '../model'
import styles from './CounterActions.module.css'

const CounterActions = () => {
  const dispatch = useAppDispatch()
  const isMinCount = useAppSelector(selectors.selectIsMin)
  const isMaxCount = useAppSelector(selectors.selectIsMax)

  const navigate = useNavigate()

  return (
    <div className={styles.actions}>
      <Button
        className={styles['actions_button']}
        disabled={isMinCount}
        onClick={() => dispatch(actions.decrement())}
      >
        -
      </Button>
      <Button
        className={styles['actions_button']}
        disabled={isMaxCount}
        onClick={() => dispatch(actions.increment())}
      >
        +
      </Button>
      <Button
        className={styles['actions_button']}
        disabled={isMinCount}
        onClick={() => dispatch(actions.reset())}
      >
        reset
      </Button>
      <Button
        className={styles['actions_button']}
        onClick={() => navigate('/settings')}
      >
        set
      </Button>
    </div>
  )
}

export { CounterActions }
