import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { routesObj } from '@/pages/routing'

const router = (import.meta.env.PROD ? createHashRouter : createBrowserRouter)(
  routesObj
)

export { router }
