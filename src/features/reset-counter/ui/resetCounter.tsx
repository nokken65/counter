import { IconReload } from '@tabler/icons-react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { CounterActionButton, counterModel } from '@/entities/counter'

const ResetCounter = () => {
  const dispatch = useAppDispatch()
  const isCountStart = useAppSelector(counterModel.selectors.selectIsStart)

  const handleResetCounter = () => dispatch(counterModel.actions.reset())

  return (
    <CounterActionButton
      disabled={isCountStart}
      onClick={handleResetCounter}
    >
      <IconReload />
    </CounterActionButton>
  )
}

export { ResetCounter }
