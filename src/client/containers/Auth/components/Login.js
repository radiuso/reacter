import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthActionCreator from '../actions/AuthActionCreator';

class Login extends Component {
  login(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    AuthActionCreator.login(username, password);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.auth !== undefined) {
      this.props.router.transitionTo('home');
    }
  }

  render() {
    return (
      <div className="login">
        <h3>{this.props.auth.username}</h3>
        <form id="login" onSubmit={ this.login.bind(this) }>
          <input type="text" ref="username" name="username" placeholder="Name" />
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

export default connect(mapStateToProps)(Login);