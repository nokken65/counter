import { NumberInput } from '@mantine/core'
import type { NumberInputProps } from '@mantine/core'

type EditCounterSettingsNumberInputProps = NumberInputProps

const EditCounterSettingsNumberInput = (
  props: EditCounterSettingsNumberInputProps
) => {
  const { ...rest } = props

  return (
    <NumberInput
      min={0}
      max={1000000}
      clampBehavior="strict"
      allowDecimal={false}
      thousandSeparator=","
      stepHoldDelay={500}
      stepHoldInterval={(t) => 1000 / t ** 2}
      styles={{
        root: {
          display: 'grid',
          rowGap: '0.2rem',
          columnGap: '0.2rem',
          gridTemplateRows: '1fr auto',
          gridTemplateColumns: '3rem 12rem',
          alignItems: 'center'
        },
        error: {
          gridColumn: '2 / 3'
        }
      }}
      {...rest}
    />
  )
}

export { EditCounterSettingsNumberInput }
