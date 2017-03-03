import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';

class LoginComponent extends Component {
  handleLogin(e) {
    e.preventDefault();
    let email = this.refs.login.value;
    let password = this.refs.password.value;

    login(email, password);
  }

  componentWillUpdate() {
    if(this.props.auth.isAuthenticated) {
      this.props.router.push('/users');
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
