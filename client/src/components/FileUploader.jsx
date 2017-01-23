import React, { Component } from 'react';

class FileUploader extends Component {
  handleFileAdded = (e) => {
    if (this.props.onFileAdded) {
      this.props.onFileAdded(e, e.currentTarget.files);
    }
  }

  render() {
    const {
      style
    } = this.props;

    return (
      <div style={style} className="hj-file-uploader">
        <input onChange={this.handleFileAdded} type="file" />
      </div>
    );
  }
}

FileUploader.propTypes = {
  onFileAdded: React.PropTypes.func,
  style: React.PropTypes.object
};

export default FileUploader;
