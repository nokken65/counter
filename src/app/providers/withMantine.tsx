import { MantineProvider } from '@mantine/core'
import type { MantineProviderProps } from '@mantine/core'

type WithMantineConfig = Omit<MantineProviderProps, 'children'>

const withMantine =
  (config: WithMantineConfig) => (children: () => React.ReactNode) => () => {
    return <MantineProvider {...config}>{children()}</MantineProvider>
  }

export { type WithMantineConfig, withMantine }
