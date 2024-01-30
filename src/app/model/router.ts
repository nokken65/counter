import { createBrowserRouter } from 'react-router-dom'

import { routesObj } from '@/pages/routing'

const router = createBrowserRouter(routesObj, { basename: '/counter' })

export { router }
