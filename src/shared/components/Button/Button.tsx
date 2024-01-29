import React from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const _Button = ({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export const Button = React.memo(_Button)
