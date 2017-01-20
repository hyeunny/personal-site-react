import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './App.scss';

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
          <Button.Group>
            <Button>
                <Icon name="github" />
                <a href="https://github.com/hyeunny" target="_blank">Find me on github.</a>
            </Button>
            <Button.Or />
            <Button>
                <Icon name="linkedin" />
                <a href="https://ca.linkedin.com/in/hyeunjoon-kim-a3117769" target="_blank">Connect with me on linkedin.</a>
            </Button>
            <Button.Or />
            <Button>
                <Icon name="mail" />
                <a href="mailto:hyeunjoon.kim@gmail.com">hyeunjoon.kim@gmail.com</a>
            </Button>
        </Button.Group>
      </div>
    );
  }
}

export default TopNav;
