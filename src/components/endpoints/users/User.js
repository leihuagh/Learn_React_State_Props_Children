import React, { Component } from 'react'

class User extends Component {
  render() {
    const { age, children } = this.props
    return (
      <div>
        <li key={age}>
          <div>{children}</div>
          <div>{age}</div>
        </li>
      </div>
    )
  }
}

export default User
