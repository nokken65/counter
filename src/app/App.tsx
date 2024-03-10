import { router } from './model/router'
import { store } from './model/store'

import '@mantine/core/styles.css'

import { withProviders } from './providers'

const App = withProviders({
  withMantineConfig: { defaultColorScheme: 'auto' },
  withRouterConfig: { router },
  withStoreConfig: { store }
})()

export { App }
