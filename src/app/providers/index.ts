import { compose } from 'ramda'

import { withRouter } from './withRouter'
import { withStore } from './withStore'
import type { WithRouterConfig } from './withRouter'
import type { WithStoreConfig } from './withStore'

type WithProvidersConfig = {
  withStoreConfig: WithStoreConfig
  withRouterConfig: WithRouterConfig
}

const withProviders = ({
  withStoreConfig,
  withRouterConfig
}: WithProvidersConfig) =>
  compose(withStore(withStoreConfig))(() => withRouter(withRouterConfig))

export { withProviders }
