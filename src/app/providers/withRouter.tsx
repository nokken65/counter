import { RouterProvider } from 'react-router-dom'
import type { RouterProviderProps } from 'react-router-dom'

type WithRouterConfig = RouterProviderProps

const withRouter = (config: WithRouterConfig) => <RouterProvider {...config} />

export { type WithRouterConfig, withRouter }
