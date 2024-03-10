import { Provider } from 'react-redux'
import type { ProviderProps } from 'react-redux'

type WithStoreConfig = Omit<ProviderProps, 'children'>

const withStore =
  (config: WithStoreConfig) => (children: () => React.ReactNode) => () => {
    return <Provider {...config}>{children()}</Provider>
  }

export { type WithStoreConfig, withStore }
