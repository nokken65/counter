import clsx from 'clsx'

import { useAppSelector } from '@/app/model/store'

import { selectors } from '../model'
import styles from './CounterDisplay.module.css'

const CounterDisplay = () => {
  const currentCount = useAppSelector(selectors.selectCurrentCount)
  const isMaxCount = useAppSelector(selectors.selectIsMax)

  return (
    <div className={clsx(styles.display, isMaxCount && styles['display_max'])}>
      {currentCount}
    </div>
  )
}

export { CounterDisplay }
