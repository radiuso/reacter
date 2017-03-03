import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../../actions/authActions';

class LoginComponent extends Component {
  handleLogin(e) {
    e.preventDefault();
    let email = this.refs.login.value;
    let password = this.refs.password.value;

    login(email, password);
  }

  componentWillMount() {
    logout();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      nextProps.router.push('/');
    }
  }

  render() {
    return (
      <div className="login">
        <h3>{this.props.auth.user.name}</h3>
        <form id="login" onSubmit={ this.handleLogin.bind(this) }>
          <input type="email" ref="login" name="login" placeholder="Email" />
          <br />
          <input type="text" ref="password" name="password" placeholder="Password" />
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    auth: store.authState
  };
};

export default connect(mapStateToProps)(LoginComponent);
