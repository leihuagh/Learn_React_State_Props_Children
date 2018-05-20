import React, { Component } from 'react'

class User extends Component {
  render() {
    const { age } = this.props
    return (
      <div>
        <li key={age}>
          <div>{this.props.children}</div>
          <div>{age}</div>
        </li>
      </div>
    )
  }
}

export default User
