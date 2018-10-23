import React, { Component } from 'react';
import wisi from './assets/wisi-shot.jpg'
import homept from './assets/homept-shot.jpg'
import killa from './assets/killa-shot.jpg'
import timer from './assets/timer-shot.jpg'
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
                            <a className="project-link" href="https://wisi-app.herokuapp.com/">
                                <img src={wisi} className="project-shot" />
                            </a>
                        </div>                        
                        <div className="project" id="project2">
                            <a className="project-link" href="https://homept.herokuapp.com/">
                                <img src={homept} className="project-shot" />
                            </a>
                        </div>
                        <div className="project" id="project3">
                            <a className="project-link" href="https://jonmlinch.github.io/game-project/">
                                <img src={killa} className="project-shot" />
                            </a>
                        </div>
                        <div className="project" id="project4">
                            <a className="project-link" href="https://expo.io/@surfjon2/treat-yo-self">
                                <img src={timer} className="project-shot" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Projects;