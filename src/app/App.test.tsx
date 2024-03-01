import { render } from '@testing-library/react'

import { App } from './App'

describe('Render App', () => {
  test('render app', () => {
    render(<App />)
    expect(2).toBe(2)
  })
})
