import React, { Component } from 'react';
import TopNav from './TopNav';
import './App.scss';
import { isMobile } from './utils/utils';

class App extends Component {
  componentDidMount() {
    if (isMobile.any()) {
        alert('UH OH. This site is NOT mobile optimized, but I may have left some mobile only easter eggs ^_~');
    }
    console.log('---------------------------------', 'https://ca.linkedin.com/in/hyeunjoon-kim-a3117769', '---------------------------------');
  }

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
