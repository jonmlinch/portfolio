import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './assets/porfolio-logo-border.svg';
import resume from './assets/jlinchResume-9-26-18.pdf';
import Overdrive from 'react-overdrive'
import './App.css';

class Nav extends Component {
  constructor(){
    super()
    this.state = {
      width: "0%",
      icon: "menu",
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
      navigate: true
    })
  }

  closeNav = () => {
    console.log("Closing Nav")
    this.setState({
      width: "0%",
      icon: "menu",
      navigate: false
    })
  }


  render() {
    return (
      <div>
        <div id="myNav" className="overlay" style={{width: this.state.width}}>
        {/* <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}><i className="material-icons">close</i></a> */}
        <div class="overlay-content">
          <Link to="/home">Home |</Link>
          <Link to="/about">About |</Link>
          <Link to="/projects">Projects |</Link>
          <a href="#f">Contact |</a>
          <a href={resume} target="_blank">Resume |</a>
        </div>
      </div>
        <nav>
            <div className="navbar">
              <Link to="/home"><img src={logo} alt='jl logo' className="logo" /></Link>
              <span className="hamburger">
                <i className="material-icons" onClick={this.handleNavbar}>{this.state.icon}</i>
              </span>
              {/* <ul className="choices-list">
                  <li><Link to="/about">About |</Link></li>
                  <li><Link to="/projects">Projects |</Link></li>
                  <li><a href="#f">Contact |</a></li>
                  <li><a href={resume} target="_blank">Resume |</a></li>
              </ul> */}
            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;