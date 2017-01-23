import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './App.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>Made with </span>
        <Icon name="heart" />
        <span>in Vancouver, BC</span>
      </div>
    );
  }
}

export default Footer;
