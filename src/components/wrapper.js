import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config'

export default ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)
