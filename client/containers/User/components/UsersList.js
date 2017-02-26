import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {

  render() {
    let users = this.props.users.map((user, index) => (
      <div key={user.id}>
        {user.id} - {user.username}
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
