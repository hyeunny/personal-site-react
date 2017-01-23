import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import './App.scss';
import { isMobile } from './utils/utils';

class App extends Component {
  componentDidMount() {
    if (isMobile.any()) {
        alert('This site is not really mobile optimized. Browse at your own peril.');
    }
    console.log('---------------------------------', 'https://ca.linkedin.com/in/hyeunjoon-kim-a3117769', '---------------------------------');
  }

  render() {
    return (
      <div className="app">
        <TopNav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
