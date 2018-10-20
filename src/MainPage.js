import React, { Component } from 'react';
import Nav from './Nav'
import Background from './Background'
import AboutMe from './AboutMe'
import './App.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Background />
        <Nav />
        <AboutMe />
      </div>
    );
  }
}

export default MainPage;