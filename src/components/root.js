import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import './root.scss'

export default ({ route }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <Link to='/' activeClassName='root__nav-item--active'>Home</Link>
    {' · '}
    <Link to='/counter' activeClassName='root__nav-item--active'>Counter</Link>
    <div className='root__viewport'>
      {renderRoutes(route.routes)}
    </div>
  </div>
)
