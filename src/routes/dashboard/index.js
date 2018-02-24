import React from 'react'
import Dashboard from './components/dashboard'
import UserMngRoute from '../userMng'
import { Redirect } from 'react-router-dom'

export default (pUrl, store) => {
  const path = `${pUrl}dashboard`
  return {
    component: Dashboard,
    path,
    routes: [
      {
        component: () => (<Redirect to='/dashboard/usermng' />),
        exact: true,
        path
      }
    ].concat(UserMngRoute(path, store))
  }
}
