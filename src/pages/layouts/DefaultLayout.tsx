import React from 'react'
import { Center } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <Center h="100svh">
      <React.Suspense fallback={'Loading...'}>
        <Outlet />
      </React.Suspense>
    </Center>
  )
}

export { DefaultLayout }
