import { combineReducers } from 'redux'
// import core from '../modules/core'
// import menu from '../modules/menu'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    // core,
    // menu,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
