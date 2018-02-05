const components = {
  empty: () => import(/* webpackChunkName: "async_empty" */'./empty'),
  demo: () => import(/* webpackChunkName: "async_demo" */'./demo'),
  demx: () => import(/* webpackChunkName: "async_demx" */'./demx')
}

export default (keys = Object.keys(components)) => {
  return Object.assign({}, ...keys.map((key) => {
    return {[key]: components[key]}
  }).filter(v => v))
}
