import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import AcronymExpander from './components/AcronymExpander';
import mugShot from './images/hj_mugshot.jpg';
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

  componentDidMount() {
    setInterval(() => { 
        this.setState({style: {color: returnRandomColor()}}) }
    , 500);
  }

  render() {
    return (
      <div className="home">
        <Grid divided="vertically">

          <Grid.Row className="caption-top" columns={1}>
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

          <Grid.Row>
            <AcronymExpander style={this.state.style} enteredWord="Hyeunjoon" />
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Home;