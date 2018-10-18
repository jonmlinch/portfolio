import React, { Component } from 'react';
import Nav from './Nav'
import TopImage from './TopImage'
import Background from './Background'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Background />
        {/* <TopImage /> */}
      </div>
    );
  }
}

export default App;
