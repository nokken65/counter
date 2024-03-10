import { redirect } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import { paths } from '@/shared/config/routes'

import { DefaultLayout } from './layouts/DefaultLayout'

const routesObj: RouteObject[] = [
  {
    path: paths.index,
    element: <DefaultLayout />,
    children: [
      { index: true, lazy: async () => await import('./Counter') },
      { path: paths.notFound, lazy: async () => await import('./NotFound') },
      {
        path: paths.noMatch,
        loader: () => redirect(paths.index)
      }
    ]
  }
]

export { routesObj }
