import React, { Component } from 'react';
import UserActionCreator from './actions/UserActionCreator';

class User extends Component {
  componentDidMount() {
    // fetch users
    UserActionCreator.fetchUsers();
  }

  render() {
    return (
      <div className="user">
        {this.props.children}
      </div>
    );
  }
}

export default User;
