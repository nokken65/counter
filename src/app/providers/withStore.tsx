import { Provider, ProviderProps } from 'react-redux'

type WithStoreConfig = Omit<ProviderProps, 'children'>

const withStore =
  (config: WithStoreConfig) => (children: () => React.ReactNode) => () => (
    <Provider {...config}>{children()}</Provider>
  )

export { type WithStoreConfig, withStore }
