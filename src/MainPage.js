import React, { Component } from 'react';
import scratches from './assets/dust_scratches.png'
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import posed from 'react-pose';
import SplitText from 'react-pose-text'
import Nav from './Nav'
import Background from './Background'
import './App.css';

const charPose = {
  exit: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, delay: 500, transition: {duration: 500} }
};

const charPoses = {
  exit: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0, delay: 500, transition: {duration: 500} }
};

const LinePose = posed.div({
  exit: {opacity: 0, x: -1000},
  enter: {opacity: 1, x: 0, transition: {duration: 1000}}
})


class MainPage extends Component {
  render() {
    return (
      <div>
        <Background image={scratches}/>
        <Nav />
        <div className="home-container">
          <div className="greeting">
              <h1 className="hi"><SplitText charPoses={charPoses}>Hi, I'm </SplitText><span className="name"><SplitText charPoses={charPoses}>Jon!</SplitText></span> <SplitText charPoses={charPoses}>Nice to meet you.</SplitText></h1>
              <LinePose>
                <hr className="line-break" />
              </LinePose>
              <h2 className="description"><SplitText charPoses={charPose}>I'm a full stack developer, educator, and just plain nice guy.</SplitText></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;