import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import AcronymExpander from './components/AcronymExpander';
import FileUploader from './components/FileUploader';

const CONTAINER_STYLE = {
	height: '100vh',
	background: 'black'
};

const FILE_UPLOADER_STYLE = {
	background: 'orange',
	color: 'yellow'
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

	_handleFileAdded = (e, files) => {
		const data = new FormData();
		data.append('file', files[0]);

		fetch('http://localhost:3000/s3/upload', {
  		method: 'POST',
  		body: data
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
        <AcronymExpander style={{color: 'white'}} enteredWord="Hyeunjoon" />
        <br/>
        <br/>
        <br/>
        <br/>
        <FileUploader onFileAdded={this._handleFileAdded} style={FILE_UPLOADER_STYLE} />
      </div>
    );
  }
}

export default DirtyTestPage;
