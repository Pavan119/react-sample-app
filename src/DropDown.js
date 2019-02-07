import React, { Component } from 'react';
import './App.css';

class DropDown extends Component {
  render() {
    return (
      <div className="App">
       <select onChange={this.props.changeLang}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    );
  }
}

export default DropDown;
