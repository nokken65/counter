import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import { createElementAndAppendToDOM } from '@/shared/utils/createElementAndAppendToDOM'

const container = createElementAndAppendToDOM('app-root')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
