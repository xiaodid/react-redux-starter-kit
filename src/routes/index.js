import React from 'react'
// import { Redirect } from 'react-router-dom'
import ROOT from '../components/root'
import Dashboard from './dashboard'
import Home from './home'
import Counter from './counter'

export default (store) => {
  const path = '/'

  return [
    {
      component: ROOT,
      routes: [
        // ADD CHILD ROUTE HERE
        Dashboard(path, store),
        Home(path, store),
        Counter(path, store),
        // 404 page
        {
          component: () => (<div>404</div>)
        }
      ]
    }
  ]
}
