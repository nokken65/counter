import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './DefaultLayout.module.css'

const DefaultLayout = () => {
  return (
    <div className={styles.layout}>
      <React.Suspense fallback={'Loading...'}>
        <Outlet />
      </React.Suspense>
    </div>
  )
}

export { DefaultLayout }
