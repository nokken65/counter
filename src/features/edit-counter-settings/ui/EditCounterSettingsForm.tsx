import { zodResolver } from '@hookform/resolvers/zod'
import { equals } from 'ramda'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { CounterSettings } from '@/entities/counter'
import type { SubmitHandler } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { counterModel } from '@/entities/counter'
import { Button } from '@/shared/components/Button'
import { Form } from '@/shared/libs/forms'

import { editCounterSettingsSchema } from '../validation'
import styles from './EditCounterSettingsForm.module.css'
import type { EditCounterSettingsValues } from '../model/models'

const EditCounterSettingsForm = () => {
  const { start, max } = useAppSelector(
    counterModel.selectors.selectSettings,
    (a, b) => equals(a, b)
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const methods = useForm<EditCounterSettingsValues>({
    defaultValues: { start, max },
    resolver: zodResolver(editCounterSettingsSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: true
  })

  const onSubmit: SubmitHandler<CounterSettings> = (data) => {
    dispatch(counterModel.actions.updateSettings(data))
  }

  return (
    <Form
      methods={methods}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Form.Field<EditCounterSettingsValues>
        name="start"
        type="number"
        min={0}
        label="start"
      />
      <Form.Field<EditCounterSettingsValues>
        name="max"
        type="number"
        min={0}
        label="max"
      />
      <div className={styles.actions}>
        <Button
          onClick={() => {
            navigate('/')
          }}
        >
          Back
        </Button>
        <Button
          disabled={
            !methods.formState.isDirty || methods.formState.isSubmitting
          }
          type="submit"
        >
          Apply
        </Button>
      </div>
    </Form>
  )
}

export { EditCounterSettingsForm }
