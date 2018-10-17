import React, { Component } from 'react';
import misty from './assets/misty.jpg';
import './App.css';

class TopImage extends Component {
  render() {
    return (
      <div>
        <img src={misty} alt="He looks onward into the mist." className="top-image" />
      </div>
    );
  }
}

export default TopImage;