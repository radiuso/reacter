import React, { Component } from 'react';
import { fetchUsers } from '../../actions/userActions';

class User extends Component {
  componentDidMount() {
    // fetch users
    fetchUsers();
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
