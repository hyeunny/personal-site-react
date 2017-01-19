import React, { Component } from 'react';
import './App.scss';

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <a target="_blank" href="https://github.com/hyeunny"><i className="fa fa-github" aria-hidden="true"></i>Find Me on Github.</a>
      </div>
    );
  }
}

export default TopNav;
