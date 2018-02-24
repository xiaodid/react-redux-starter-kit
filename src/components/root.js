import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config'
//
// class Root extends Component {
// }
export default ({ route }) => (
  <div>
    <div>ROOT</div>
    {renderRoutes(route.routes)}
  </div>
)
