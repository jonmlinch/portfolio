import React, { Component } from 'react';
import misty from './assets/misty-wide.jpg'
import wisi from './assets/wisi-shot.jpg'
import homept from './assets/homept-shot.jpg'
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
                <div className="project-display">
                    <div className="project-head">
                        <h1 className="project-title">Recent projects</h1>
                        <hr className="line-break" />
                    </div>
                    <div className="project-flex-container">
                        <div className="project" id="project1">
                            <img src={wisi} className="project-shot" />
                        </div>
                        <div className="project" id="project2">
                        <img src={homept} className="project-shot" />
                        </div>
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