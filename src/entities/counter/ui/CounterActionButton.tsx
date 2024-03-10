import { ActionIcon } from '@mantine/core'
import type { ActionIconProps, PolymorphicComponentProps } from '@mantine/core'

type CounterActionButtonProps<C> = PolymorphicComponentProps<C, ActionIconProps>

const CounterActionButton = <C = 'button',>(
  props: CounterActionButtonProps<C>
) => {
  const { children, ...rest } = props

  return (
    // @ts-expect-error ts 5.4.2 error
    <ActionIcon
      radius="xl"
      size="xl"
      variant="light"
      {...rest}
    >
      {children}
    </ActionIcon>
  )
}

export { CounterActionButton }
