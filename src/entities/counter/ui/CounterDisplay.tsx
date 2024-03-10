import React from 'react'
import { Text } from '@mantine/core'

import { useAppSelector } from '@/app/model/store'
import { decimalToKhimer } from '@/shared/utils/decimalToKhimer'
import { decimalToRoman } from '@/shared/utils/decimalToRoman'

import { selectors } from '../model'

const CounterDisplay = () => {
  const currentCount = useAppSelector(selectors.selectCurrentCount)
  const isCountMax = useAppSelector(selectors.selectIsMax)
  const { numeralSystem } = useAppSelector(selectors.selectSettings)

  const value = React.useMemo(() => {
    switch (numeralSystem) {
      case 'arabic':
        return currentCount
      case 'roman':
        return decimalToRoman(currentCount)
      case 'khimer':
        return decimalToKhimer(currentCount)
      default:
        return currentCount
    }
  }, [currentCount, numeralSystem])

  const color = isCountMax
    ? 'var(--mantine-color-error)'
    : 'var(--mantine-color-text)'

  return (
    <>
      {numeralSystem !== 'arabic' && (
        <Text
          fw={700}
          size="1rem"
          component="span"
          style={{
            color
          }}
        >
          {`(${currentCount})`}
        </Text>
      )}
      <Text
        fw={700}
        size="2rem"
        component="span"
        style={{
          color
        }}
      >
        {value}
      </Text>
    </>
  )
}

export { CounterDisplay }
