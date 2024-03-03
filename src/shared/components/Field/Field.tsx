import React from 'react'
import clsx from 'clsx'

import styles from './Field.module.css'

type FieldProps = Omit<React.ComponentPropsWithRef<'input'>, 'className'> & {
  label?: string
  isDirty: boolean
  error: string | undefined
  classNames?: {
    field?: string
    container?: string
    label?: string
    input?: string
    error_message?: string
  }
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { label, isDirty, error, name, id, classNames, ...rest } = props

  return (
    <div className={clsx(styles.field, classNames?.field)}>
      <label
        className={clsx(styles.container, classNames?.container)}
        htmlFor={id}
      >
        <p className={clsx(styles.label, classNames?.label)}>{label}</p>
        <input
          className={clsx(
            styles.input,
            classNames?.input,
            error && styles.input_error
          )}
          ref={ref}
          id={id}
          name={name}
          {...rest}
        />
      </label>
      {isDirty && error && (
        <span className={clsx(styles.error_message, classNames?.error_message)}>
          {error}
        </span>
      )}
    </div>
  )
})

export type { FieldProps }
export { Field }
