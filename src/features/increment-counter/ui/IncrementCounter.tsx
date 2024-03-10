import { IconPlus } from '@tabler/icons-react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { CounterActionButton, counterModel } from '@/entities/counter'

const IncrementCounter = () => {
  const dispatch = useAppDispatch()
  const isCountMax = useAppSelector(counterModel.selectors.selectIsMax)

  const handleIncrementCounter = () =>
    dispatch(counterModel.actions.increment())

  return (
    <CounterActionButton
      disabled={isCountMax}
      onClick={handleIncrementCounter}
    >
      <IconPlus />
    </CounterActionButton>
  )
}

export { IncrementCounter }
