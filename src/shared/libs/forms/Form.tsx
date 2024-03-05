import { FormProvider } from 'react-hook-form'
import type { FormProps as FormViewProps } from '@/shared/components/Form'
import type { FieldValues, UseFormReturn } from 'react-hook-form'

import { Form as FormView } from '@/shared/components/Form'

import { Field } from './Field'

type FormProps<T extends FieldValues> = FormViewProps & {
  methods: UseFormReturn<T>
}

const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { methods, children, ...rest } = props

  return (
    <FormProvider {...methods}>
      <FormView {...rest}>{children}</FormView>
    </FormProvider>
  )
}

Form.Field = Field

export { Form }
