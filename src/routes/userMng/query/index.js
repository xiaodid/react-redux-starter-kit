import loadable from 'utils/loadable'
import { injectReducer } from 'store/reducers'
export default (store) =>
  // 必需返回Loadable这个High order component
  // 在这里动态更新store和加载相应的组件
  loadable(() => import('./modules/query')
    .then(reducer => {
      injectReducer(store, {
        key: 'users',
        reducer: reducer.default
      })
      return import('./containers/queryContainer')
    }))
