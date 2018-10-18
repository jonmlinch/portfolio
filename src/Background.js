import React, { Component } from 'react';
import background from './assets/dust_scratches.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img src={background} alt="dust-scratches" className="background-scratches" />
      </div>
    );
  }
}

export default App;