import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  getUsername() {
    const { auth } = this.props;

    if(auth.isAuthenticated) {
      return (
        <h2>Welcome { auth.user.name }</h2>
      )
    }
  }
  render() {
    const userSection = this.getUsername();

    return (
      <div className="App">
        {userSection}
        {this.props.children}
      </div>
    );
  }
}


const mapStateToProps = function(store) {
  return {
    auth: store.authState
  };
};

export default connect(mapStateToProps)(App);
