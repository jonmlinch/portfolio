import React, { Component } from 'react';
import Nav from './Nav'
import TopImage from './TopImage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TopImage />
      </div>
    );
  }
}

export default App;
