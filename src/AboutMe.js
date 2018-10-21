import React, { Component } from 'react';
import misty from './assets/misty-morning.jpg'
import './App.css';

class AboutMe extends Component {

  render() {
    return (
        <div className="about-container">
            <div className="misty-container">
                <img src={misty} alt="looking at the fog" className="misty" />
            </div>
            <div className="clever-words">
                <p className="words">This is where I'm going to say some really clever things about myself. I might talk about how funny I am despite my gloomy looking color scheme. Or I could talk about my prior role as a teacher and how I left that profession because it made me feel like the my gloomy site suggests. I could then talk about how I'm finding a new side of me a developer who likes to makw things that hopefully look good but also provide some sort of useful purpose.
                </p>
                <p className="words">Here I will talk about my pursuit of a new career. I will talk about either previous projects that I created or I will talk about current projects that I'm working on. Maybe I should start a blog?</p>
            </div>
        </div>
    )
  }
}

export default AboutMe;
