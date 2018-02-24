import Query from './query'

export default (pUrl, store) => {
  const path = `${pUrl}/usermng`
  return [
    {
      component: Query(store),
      exact: true,
      path
    }
  ]
}
