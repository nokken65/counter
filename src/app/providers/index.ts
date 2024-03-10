import { compose } from 'ramda'

import { withMantine } from './withMantine'
import { withRouter } from './withRouter'
import { withStore } from './withStore'
import type { WithMantineConfig } from './withMantine'
import type { WithRouterConfig } from './withRouter'
import type { WithStoreConfig } from './withStore'

type WithProvidersConfig = {
  withMantineConfig: WithMantineConfig
  withStoreConfig: WithStoreConfig
  withRouterConfig: WithRouterConfig
}

const withProviders = ({
  withMantineConfig,
  withStoreConfig,
  withRouterConfig
}: WithProvidersConfig) => {
  return compose(
    withStore(withStoreConfig),
    withMantine(withMantineConfig)
  )(() => withRouter(withRouterConfig))
}

export { withProviders }
