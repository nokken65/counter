import clsx from 'clsx'

import { MAX_COUNT } from '@/shared/constants/counter'

import styles from './CounterDisplay.module.css'

type CounterDisplayProps = {
  count: number
}

const CounterDisplay = ({ count }: CounterDisplayProps) => {
  return (
    <div
      className={clsx(
        styles.display,
        count >= MAX_COUNT && styles['display_max']
      )}
    >
      {count}
    </div>
  )
}

export { CounterDisplay }
