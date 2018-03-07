import loadable from 'utils/loadable'
import { injectReducer } from 'store/reducers'

export default (pUrl, store) => {
  const component = loadable(() => import('./modules/counter')
    .then(reducer => {
      injectReducer(store, {
        key: 'counter',
        reducer: reducer.default
      })
      return import('./containers/counterContainer')
    }))

  return {
    component,
    exact: true,
    path: '/counter'
  }
}
