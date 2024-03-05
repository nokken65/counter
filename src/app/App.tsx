import { router } from './model/router'
import { store } from './model/store'

import './App.css'

import { withProviders } from './providers'

const App = withProviders({
  withRouterConfig: { router },
  withStoreConfig: { store }
})

export { App }
