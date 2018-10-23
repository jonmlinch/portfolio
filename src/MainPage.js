import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Nav from './Nav'
import Background from './Background'
import AboutMe from './AboutMe'
import './App.css';

const RouteContainer = posed.div({
    enter: { opacity: 1, transition: {duration: 1000}, beforeChildren: true},
    exit: { opacity: 0, transition: {duration: 1000}}
  })

class MainPage extends Component {
  render() {
    return (
      <div>
        <Background />
        <Nav />
        <div className="home-container">
            <div className="greeting">
                <h1 className="hi">Hi, I'm <span className="name">Jon!</span> Nice to meet you.</h1>
                <hr className="line-break" />
                <h2 className="description">I'm a full stack developer, educator, and just plain <span className="name">nice guy.</span></h2>
            </div>
        </div>
      </div>
    );
  }
}

export default MainPage;