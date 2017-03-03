import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppSearchBar from '../../components/AppSearchBar';


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
      <div>
        <AppSearchBar isLogged={ this.props.auth.isAuthenticated } />
        <div className="App">
          {userSection}
          {this.props.children}
        </div>
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
