import React, { Component } from 'react';
import mugShot from './images/hj_mugshot.jpg';
import './App.scss';
import AcronymExpander from './components/AcronymExpander';

const returnRandomColor = (colors = ['white', 'orange', 'yellow', 'green']) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {color: returnRandomColor()}
    }
  }

  componentDidMount() {
    setInterval(() => { 
        this.setState({style: {color: returnRandomColor()}}) }
    , 200);
  }

  render() {
    return (
      <div className="home">
        <div className="greeting-container">
            <h1 className="greeting top">Hello, I am Hyeunjoon.</h1>
                <img className="mugshot" alt="myMug" src={mugShot} />
            <h1 className="greeting bottom">..and I love building things on the web.</h1>
        </div>
        <AcronymExpander style={this.state.style} enteredWord="Hyeunjoon" />
      </div>
    );
  }
}

export default Home;
