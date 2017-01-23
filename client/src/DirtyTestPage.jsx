import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const CONTAINER_STYLE = {
	height: '100vh',
	background: 'black'
};

class DirtyTestPage extends Component {
	_handleClick = () => {
		fetch('http://localhost:3000/api/test', {
      method: 'get'
    })
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      alert(`proxy request to express returned: ${text}`);
    })
    .catch((err) => {
      console.log(err);
    });
	}


  render() {
    return (
      <div style={CONTAINER_STYLE} className="dirty-test-page">
        <Button onClick={this._handleClick}>Clickety click.</Button>
      </div>
    );
  }
}

export default DirtyTestPage;
