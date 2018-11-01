import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import logo from './assets/porfolio-logo-border.svg';
import resume from './assets/JLinch-resume-oct-22-2018.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import Overdrive from 'react-overdrive'
import './App.css';

class Nav extends Component {
  constructor(){
    super()
    this.state = {
      width: "0%",
      icon: "menu",
      color: "rgba(23, 23, 23, 0.7)",
      navigate: false
    }
  }

  handleNavbar = () => {
    if (this.state.navigate === true) {
      this.closeNav()
    } else {
      this.openNav()
    }
  }

  openNav = () => {
    console.log("Opening Nav")
    this.setState({
      width: "100%",
      icon: "close",
      color: "rgba(129, 129, 129, 0.7)",
      navigate: true
    })
  }

  closeNav = () => {
    console.log("Closing Nav")
    this.setState({
      width: "0%",
      icon: "menu",
      color: "rgba(23, 23, 23, 0.7)",
      navigate: false
    })
  }


  render() {
    return (
      <div>
        <div id="myNav" className="overlay" style={{width: this.state.width}}>
        <div className="overlay-content">
          <Link to="/home">Home |</Link>
          <Link to="/about">About |</Link>
          <Link to="/projects">Projects |</Link>
          <a href={resume} target="_blank">Resume |</a>
          <div className="icon-container">
            <a href="http://www.linkedin.com/in/jonmlinch" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
            <a href="https://github.com/jonmlinch" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className="icons" /></a>
          </div>
        </div>
      </div>
        <nav>
            <div className="navbar">
              <div className="logo">
                <Link to="/home"><img src={logo} alt='jl logo'  /></Link>
              </div>
              <span className="hamburger" style={{color: this.state.color}}>
                <i className="material-icons" onClick={this.handleNavbar}>{this.state.icon}</i>
              </span>
            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;