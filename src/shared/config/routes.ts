const paths = {
  index: import.meta.env.DEV ? '/' : '/counter',
  settings: 'settings',
  notFound: '404',
  noMatch: '*'
} as const

export { paths }
