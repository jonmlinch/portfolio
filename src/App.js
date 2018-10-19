import React, { Component } from 'react';
import Nav from './Nav'
import TopImage from './TopImage'
import Background from './Background'
import IntroLogo from './IntroLogo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Background /> */}
        <Nav />
        <IntroLogo />
        {/* <TopImage /> */}
      </div>
    );
  }
}

export default App;
