import { redirect, RouteObject } from 'react-router-dom'

import { paths } from '@/shared/config/routes'

import { DefaultLayout } from './layouts/DefaultLayout'

const routesObj: RouteObject[] = [
  {
    path: paths.index,
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        loader: () => redirect(paths.counter)
      },
      { path: paths.counter, lazy: () => import('./Counter') },
      { path: paths.settings, lazy: () => import('./Settings') }
    ]
  },
  { path: paths.notFound, lazy: () => import('./NotFound') },
  {
    path: paths.noMatch,
    loader: () => redirect(paths.index)
  }
]

export { routesObj }
