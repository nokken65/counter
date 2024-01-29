import './App.css'

import { router } from './model/router'
import { store } from './model/store'
import { withProviders } from './providers'

const App = withProviders({
  withStoreConfig: { store },
  withRouterConfig: { router }
})()

export { App }
