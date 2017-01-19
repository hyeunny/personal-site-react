import React, { Component } from 'react';
import TopNav from './TopNav';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
