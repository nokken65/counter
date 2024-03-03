import React from 'react'
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
  UseFormStateReturn
} from 'react-hook-form'
import type { FieldProps as FieldViewProps } from '@/shared/components/Field'

import { Field as FieldView } from '@/shared/components/Field'

type FieldProps<T> = Omit<FieldViewProps, 'name' | 'error' | 'isDirty'> & {
  name: Path<T>
}

const Field = <T extends FieldValues>(props: FieldProps<T>) => {
  const { name, ...rest } = props
  const { control } = useFormContext()

  const render = ({
    field,
    fieldState
  }: {
    field: ControllerRenderProps<FieldValues, Path<T>>
    fieldState: ControllerFieldState
  }) => {
    const value = field.value || (field.value === 0 ? 0 : '')

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
      event
    ) => {
      if (rest.type === 'number') {
        field.onChange(parseFloat(event.target.value))
      } else {
        field.onChange(event)
      }
    }

    return (
      <FieldView
        id={name}
        {...rest}
        error={fieldState.error?.message}
        isDirty={fieldState.isDirty}
        name={field.name}
        ref={field.ref}
        value={value}
        onBlur={field.onBlur}
        onChange={handleChange}
      />
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      render={render}
    />
  )
}

export { Field }
