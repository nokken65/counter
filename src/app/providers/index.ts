import { compose } from 'ramda'

import { withMantine } from './withMantine'
import { withStore } from './withStore'
import type { WithMantineConfig } from './withMantine'
import type { WithStoreConfig } from './withStore'

type WithProvidersConfig = {
  withMantineConfig: WithMantineConfig
  withStoreConfig: WithStoreConfig
}

const withProviders = ({
  withMantineConfig,
  withStoreConfig
}: WithProvidersConfig) => {
  return compose(withStore(withStoreConfig), withMantine(withMantineConfig))
}

export { withProviders }
