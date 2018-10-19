import React, { Component } from 'react';
import logo from './assets/porfolio-logo-border.svg';
import resume from './assets/jlinchResume-9-26-18.pdf';
import Overdrive from 'react-overdrive'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeaveTimeout={1000}>
          <nav>
              <div className="navbar">
              <Overdrive id="big-to-small-logo">
                <a href="#" className=""><img src={logo} alt='jl logo' className="logo" /></a>
              </Overdrive>
                <ul className="choices-list">
                    <li><a href="#">About |</a></li>
                    <li><a href="#">Projects |</a></li>
                    <li><a href="#f">Contact |</a></li>
                    <li><a href={resume} target="_blank">Resume |</a></li>
                </ul>
              </div>
          </nav>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Nav;