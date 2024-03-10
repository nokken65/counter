import { store } from './model/store'

import '@mantine/core/styles.css'

import { Center } from '@mantine/core'

import '@/entities/counter'

import { Counter } from '@/widgets/Counter'

import { withProviders } from './providers'

const _App = () => {
  return (
    <Center h="100svh">
      <Counter />
    </Center>
  )
}

const App = withProviders({
  withMantineConfig: { defaultColorScheme: 'auto' },
  withStoreConfig: { store }
})(_App)

export { App }
