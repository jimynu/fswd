import React, { Component } from 'react';
import './index.css';
import './logo.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>{ this.props.children }</h2>
      </div>
    );
  }
}

export default Header;
