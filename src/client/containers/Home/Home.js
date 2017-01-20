import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Home sweet home</h2>
        <br />

        <Link to='/users'>Users</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default Home;
