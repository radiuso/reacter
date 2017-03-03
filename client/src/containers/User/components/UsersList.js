import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {

  render() {
    let users = this.props.users.map((user, index) => (
      <div key={user._id}>
        {user.name} - {user.email}
      </div>
    ));

    return (
    <div>
      {users}
    </div>);
  }
}

const mapStateToProps = function(store) {
  return {
    users: store.userState
  };
};

export default connect(mapStateToProps)(UsersList);
