import React, { Component } from 'react'
import { users } from './../../../mocks'
import User from './User'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users,
      title: 'Users List'
    }
  }

  makeTenYearsYounger = () => {
    const { users } = this.state
    const newState = users.map(user => {
      const tempUser = user
      tempUser.age -= 10
      return tempUser
    })
    this.setState({
      newState
    })
  }
  render() {
    const { title, users } = this.state
    return (
      <div>
        <button onClick={this.makeTenYearsYounger}>
          Make 10 Years Younger
        </button>
        <br />
        <h1>{title}</h1>
        {users.map(user => {
          return <User age={user.age}>{user.name}</User>
        })}
      </div>
    )
  }
}

export default Users
