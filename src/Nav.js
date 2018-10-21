import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './assets/porfolio-logo-border.svg';
import resume from './assets/jlinchResume-9-26-18.pdf';
import Overdrive from 'react-overdrive'
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="navbar">
            {/* <Overdrive id="big-to-small-logo"> */}
              <Link to="/home"><img src={logo} alt='jl logo' className="logo" /></Link>
            {/* </Overdrive> */}
              <ul className="choices-list">
                  <li><Link to="/about">About |</Link></li>
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