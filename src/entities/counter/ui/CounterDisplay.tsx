import { Text } from '@mantine/core'

import { useAppSelector } from '@/app/model/store'

import { selectors } from '../model'

const CounterDisplay = () => {
  const currentCount = useAppSelector(selectors.selectCurrentCount)
  const isCountMax = useAppSelector(selectors.selectIsMax)

  return (
    <Text
      fw={700}
      size="2rem"
      component="span"
      c={isCountMax ? 'red' : 'white'}
    >
      {currentCount}
    </Text>
  )
}

export { CounterDisplay }
