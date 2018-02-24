/*
 * 返回第一级路由定义
 */
import React from 'react'
import { Redirect } from 'react-router-dom'
import ROOT from '../components/root'
import Dashboard from './dashboard'

export default (store) => {
  const path = '/'

  return [
    {
      component: ROOT,
      routes: [
        {
          component: () => (<Redirect to='/dashboard' />),
          exact: true,
          path
        },
        // ADD CHILD ROUTE HERE
        Dashboard(path, store),

        // 404 page
        {
          component: () => (<div>404</div>)
        }
      ]
    }
  ]
}
