import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { counterModel } from '@/entities/counter'
import { Button } from '@/shared/components/Button'

const ResetCounter = () => {
  const dispatch = useAppDispatch()
  const isCountStart = useAppSelector(counterModel.selectors.selectIsStart)

  const handleResetCounter = () => dispatch(counterModel.actions.reset())

  return (
    <Button
      disabled={isCountStart}
      onClick={handleResetCounter}
    >
      reset
    </Button>
  )
}

export { ResetCounter }
