import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

class Dashboard extends Component {
  render () {
    const { route } = this.props
    return (
      <div className='App'>
        DASHBOARD
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default Dashboard
