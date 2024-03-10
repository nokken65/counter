import React from 'react'
import { Button, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAdjustmentsAlt } from '@tabler/icons-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { equals } from 'ramda'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { counterModel } from '@/entities/counter'
import { COUNTER_DEFAULT } from '@/entities/counter/constants/default'

import { editCounterSettingsSchema } from '../validation'
import { EditCounterSettingsNumberInput } from './EditCounterSettingsNumberInput'
import type { EditCounterSettingsValues } from '../model/models'

const EditCounterSettingsForm = () => {
  const { start, max, step } = useAppSelector(
    counterModel.selectors.selectSettings,
    (a, b) => equals(a, b)
  )
  const dispatch = useAppDispatch()

  const form = useForm<EditCounterSettingsValues>({
    initialValues: {
      start,
      max,
      step
    },
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
        <EditCounterSettingsNumberInput
          label="start"
          {...form.getInputProps('start')}
        />
        <EditCounterSettingsNumberInput
          label="max"
          {...form.getInputProps('max')}
        />
        <EditCounterSettingsNumberInput
          min={1}
          label="step"
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
