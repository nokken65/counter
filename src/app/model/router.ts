import { createHashRouter } from 'react-router-dom'

import { routesObj } from '@/pages/routing'

const router = createHashRouter(routesObj)

export { router }
