import React from 'react'
import clsx from 'clsx'

import styles from './Form.module.css'

type FormProps = React.ComponentPropsWithoutRef<'form'>

const Form = (props: FormProps) => {
  const { children, className, ...rest } = props

  return (
    <form
      className={clsx(styles.form, className)}
      {...rest}
    >
      {children}
    </form>
  )
}

export type { FormProps }
export { Form }
