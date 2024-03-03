import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { counterModel } from '@/entities/counter'
import { Button } from '@/shared/components/Button'

const IncrementCounter = () => {
  const dispatch = useAppDispatch()
  const isCountMax = useAppSelector(counterModel.selectors.selectIsMax)

  const handleIncrementCounter = () =>
    dispatch(counterModel.actions.increment())

  return (
    <Button
      disabled={isCountMax}
      onClick={handleIncrementCounter}
    >
      increment
    </Button>
  )
}

export { IncrementCounter }
