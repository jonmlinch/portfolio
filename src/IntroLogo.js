import React, { Component } from 'react';
import strokeLogo from './assets/portfolio-stroke.svg'
import Overdrive from 'react-overdrive'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class IntroLogo extends Component {
  render() {
    return (
    <div className="intro-container">
      <div className="intro-logo">
        <object>
            <Overdrive id="big-to-small-logo" duration="100" animationDelay="1">
            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={2000}>
            <embed src={strokeLogo} />
            </ReactCSSTransitionGroup>
            </Overdrive>
        </object>
      </div>
      
    </div>
    );
  }
}

export default IntroLogo;