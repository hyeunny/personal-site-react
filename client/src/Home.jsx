import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import AcronymExpander from './components/AcronymExpander';
import mugShot from './images/hj_mugshot.jpg';
import termShot from './images/terminal.png';
import './App.scss';

const COLORS = {
  mainPink: '#F92672',
  mainGreen: '#A6E22E'
}

const returnRandomColor = (colors = [COLORS.mainPink, COLORS.mainGreen]) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        style: {color: returnRandomColor()}
    }
  }

  handleClick = () => {
    fetch('http://freegeoip.net/json/', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      alert(`Looks like your IP address is ${json.ip}, how is the weather over there in ${json.city}, ${json.country_name}?`)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    setInterval(() => { 
        this.setState({style: {color: returnRandomColor()}}) }
    , 500);
  }

  render() {
    return (
      <div className="home">
        <Grid divided="vertically">

          <Grid.Row className="caption-top" columns={2}>
            <Grid.Column>
              <h1>Hello I am Hyeunjoon.</h1>
            </Grid.Column>              
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Image className="mugshot" src={mugShot} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="caption-bottom" columns={1}>
            <Grid.Column>
              <h1>and I love building things on the web...</h1>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <AcronymExpander style={this.state.style} enteredWord="Hyeunjoon" />
            </Grid.Column>
            <Grid.Column only="computer">
              <Image onClick={this.handleClick} className="termshot" src={termShot} />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Home;