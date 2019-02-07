import React, { Component } from 'react';
import './App.css';

class MultiLine extends Component {

  render() {
    return (
      <div className="App">
        <textarea rows="4" cols="50" onKeyDown={this.props.handleInput}>
        </textarea>
      </div>
    );
  }
}

export default MultiLine;
