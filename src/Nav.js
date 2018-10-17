import React, { Component } from 'react';
import logo from './assets/porfolio-logo-border.svg';
import resume from './assets/jlinchResume-9-26-18.pdf';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="navbar">
              <a href="#" className=""><img src={logo} alt='jl logo' className="logo" /></a>
              <ul className="choices-list">
                  <li><a href="#">About |</a></li>
                  <li><a href="#">Projects |</a></li>
                  <li><a href="#f">Contact |</a></li>
                  <li><a href={resume} target="_blank">Resume |</a></li>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;