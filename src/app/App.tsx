import { router } from './model/router'
import { store } from './model/store'

import './App.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export { App }
