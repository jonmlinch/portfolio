import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import misty from './assets/misty-morning.jpg'
import './App.css';

class AboutMe extends Component {

  render() {
    return (
        <div>
            <img src={misty} alt="looking at the fog" className="misty" />
        </div>
    )
  }
}

export default AboutMe;
