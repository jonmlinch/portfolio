import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import MainPage from './MainPage'
import strokeLogo from './assets/portfolio-stroke.svg'
import Overdrive from 'react-overdrive'


class IntroLogo extends Component {
    constructor(){
        super()
        this.state = {
          entrance: false,
        }
      }
    
      componentDidMount(){
        this.handleEntrance()
      }
    
      switchUp = () => {
        this.setState({
          entrance: true,
        })
      }
    
      handleEntrance = (e) => {
        console.log('Attempting to run handleEntrance')
        setTimeout(this.switchUp, 4500)
      }

  render() {
    if (this.state.entrance === false){
        return (
            <div className="intro-container">
              <div className="intro-logo">
                <object>
                    <Overdrive id="big-to-small-logo" duration="100" animationDelay="1">
                    <embed src={strokeLogo} />
                    </Overdrive>
                </object>
              </div>
            </div>
            );
    } else {
        return (
            <Redirect to="/home" />
        )
    }
  }
}

export default IntroLogo;