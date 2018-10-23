import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import posed from 'react-pose';
import SplitText from 'react-pose-text'
import Nav from './Nav'
import Background from './Background'
import AboutMe from './AboutMe'
import './App.css';

const charPose = {
  exit: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, transition: {duration: 500} }
};

const charPoses = {
  exit: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0, transition: {duration: 500} }
};


class MainPage extends Component {
  render() {
    return (
      <div>
        <Background />
        <Nav />
        <div className="home-container">
            <div className="greeting">
               <h1 className="hi"><SplitText charPoses={charPoses}>Hi, I'm </SplitText><span className="name"><SplitText charPoses={charPoses}>Jon!</SplitText></span> <SplitText charPoses={charPoses}>Nice to meet you.</SplitText></h1>
                <hr className="line-break" />
                <h2 className="description"><SplitText charPoses={charPose}>I'm a full stack developer, educator, and just plain nice guy.</SplitText></h2>
            </div>
        </div>
      </div>
    );
  }
}

export default MainPage;