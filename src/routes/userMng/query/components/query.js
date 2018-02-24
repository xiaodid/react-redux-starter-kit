import React, { Component } from 'react'

class Query extends Component {
  constructor () {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.queryUsers({
      userList: ['1', '2']
    })
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.onClick}>update userList</button>
        </div>
        <div>User List:</div>
        {
          this.props.userList.map((u, i) => (<div key={i}>{u}</div>))
        }
      </div>
    )
  }
}

export default Query
