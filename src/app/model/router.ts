import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { routesObj } from '@/pages/routing'

const router = createHashRouter(routesObj, { basename: '/counter' })

export { router }
