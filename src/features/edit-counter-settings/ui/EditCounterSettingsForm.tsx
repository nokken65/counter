import React from 'react'
import { Button, Select, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAdjustmentsAlt } from '@tabler/icons-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { equals } from 'ramda'
import type { ComboboxData } from '@mantine/core'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { counterModel } from '@/entities/counter'
import { COUNTER_DEFAULT } from '@/entities/counter/constants'

import { editCounterSettingsSchema } from '../validation'
import { EditCounterSettingsNumberInput } from './EditCounterSettingsNumberInput'
import type { EditCounterSettingsValues } from '../model/models'

const data: ComboboxData = [
  { label: 'Arabic', value: 'arabic' },
  { label: 'Roman', value: 'roman' },
  { label: 'Khimer', value: 'khimer' }
]

const EditCounterSettingsForm = () => {
  const settings = useAppSelector(
    counterModel.selectors.selectSettings,
    (a, b) => equals(a, b)
  )
  const dispatch = useAppDispatch()

  const form = useForm<EditCounterSettingsValues>({
    name: 'edit-counter-settings',
    initialValues: { ...settings },
    validateInputOnChange: true,
    validate: zodResolver(editCounterSettingsSchema)
  })

  React.useEffect(() => {
    const { hasErrors } = form.validate()

    if (!hasErrors) {
      dispatch(counterModel.actions.updateSettings(form.values))
    }
  }, [form.values])

  const handleReset = () => {
    form.setValues(COUNTER_DEFAULT.settings)
  }

  return (
    <form>
      <Stack>
        <Select
          label="Numeral System"
          data={data}
          {...form.getInputProps('numeralSystem')}
        />
        <EditCounterSettingsNumberInput
          label="Start"
          {...form.getInputProps('start')}
        />
        <EditCounterSettingsNumberInput
          label="Max"
          {...form.getInputProps('max')}
        />
        <EditCounterSettingsNumberInput
          min={1}
          label="Step"
          {...form.getInputProps('step')}
        />
        <Button
          variant="light"
          radius="xl"
          leftSection={<IconAdjustmentsAlt />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Stack>
    </form>
  )
}

export { EditCounterSettingsForm }
