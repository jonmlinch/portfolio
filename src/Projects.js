import React, { Component } from 'react';
import misty from './assets/misty-wide.jpg'
import Background from './Background'
import Nav from './Nav'
import './App.css';

class Projects extends Component {

  render() {
    return (
        <div>
            <Background />
            <Nav />
            <h1>This will show all my cool projects. Coming soon...</h1>
        </div>
    )
  }
}

export default Projects;