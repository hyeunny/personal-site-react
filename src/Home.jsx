import React, { Component } from 'react';
import mugShot from './images/hj_mugshot.jpg';
import './App.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="greeting top">Hello, I am Hyeunjoon.</h1>
          <img className="mugshot" alt="myMug" src={mugShot} />
        <h1 className="greeting bottom">..and I love building things on the web.</h1>
      </div>
    );
  }
}

export default Home;
