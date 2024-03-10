import { Card, Flex, Stack } from '@mantine/core'

import { CounterDisplay } from '@/entities/counter'
import { DecrementCounter } from '@/features/decrement-counter'
import { EditCounterSettingsForm } from '@/features/edit-counter-settings'
import { IncrementCounter } from '@/features/increment-counter'
import { ResetCounter } from '@/features/reset-counter'

const Counter = () => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      styles={{
        root: {
          width: 'fit-content',
          alignItems: 'center',
          gap: '1.5rem'
        }
      }}
    >
      <Flex
        gap={24}
        wrap="wrap"
        align="center"
        justify="center"
      >
        <Stack
          align="center"
          gap={32}
          py={12}
        >
          <CounterDisplay />

          <Flex gap={24}>
            <DecrementCounter />
            <IncrementCounter />
            <ResetCounter />
          </Flex>
        </Stack>

        <EditCounterSettingsForm />
      </Flex>
    </Card>
  )
}

export { Counter }
