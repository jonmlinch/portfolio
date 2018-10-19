import React, { Component } from 'react';
import strokeLogo from './assets/portfolio-stroke.svg'

class IntroLogo extends Component {
  render() {
    return (
    
    <div className="intro-container">
      <div className="intro-logo">
        <object>
            <embed src={strokeLogo} />
        </object>
      </div>
    </div>
    );
  }
}

export default IntroLogo;