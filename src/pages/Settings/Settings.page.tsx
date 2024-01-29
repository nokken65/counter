import { Link } from 'react-router-dom'

import { paths } from '@/shared/config/routes'

const Component = () => {
  return (
    <div>
      <Link to={paths.index}>back</Link>
    </div>
  )
}

export { Component }
