import React, { Component } from 'react';
import Nav from './Nav'
import Background from './Background'
import './App.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Background />
        <Nav />
      </div>
    );
  }
}

export default MainPage;