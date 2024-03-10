import { IconMinus } from '@tabler/icons-react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { CounterActionButton, counterModel } from '@/entities/counter'

const DecrementCounter = () => {
  const dispatch = useAppDispatch()
  const isCountStart = useAppSelector(counterModel.selectors.selectIsStart)

  const handleDecrementCounter = () => {
    dispatch(counterModel.actions.decrement())
  }

  return (
    <CounterActionButton
      disabled={isCountStart}
      onClick={handleDecrementCounter}
    >
      <IconMinus />
    </CounterActionButton>
  )
}

export { DecrementCounter }
