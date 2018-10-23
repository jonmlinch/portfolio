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
            <div className="project-container">
                <div className="project-title">
                    <h1>My project grid will go here.</h1>
                    <div className="project-flex-container">
                        <div className="project" id="project1"></div>
                        <div className="project" id="project2"></div>
                        <div className="project" id="project3"></div>
                        <div className="project" id="project4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Projects;