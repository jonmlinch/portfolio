import React, { Component } from 'react';
import misty from './assets/misty-wide.jpg'
import Background from './Background'
import Nav from './Nav'
import './App.css';

class AboutMe extends Component {

  render() {
    return (
        <div>
            <Nav />
            <div className="about-container">
                <div className="clever-words" id="clever-words">
                    <p className="words">
                        First off, thank you for visiting my site! I'm happy to have you here and I hope you enjoy your experience.
                    </p>
                    <p className="words">
                        Before I learned the wonders of "Hello, World!", I was a middle school science teacher and a wildlife biologist. I had a lot of fun doing cool experiments (Ask me about the Iodine Clock Reaction, sometime.) and I love to regale folks with incredible tales of wolves, bears, and awkward encounters with people in the woods. Eventually, I realized I wanted to do more than experience cool things, I also wanted to make cool things. That's when I found programming...
                    </p>
                    <p className="words">
                        Now, I'm a full stack web developer with a lean toward the frontend. My biggest interest is in making things that are both fun and easy to use. Check out my project section to see some cools stuff I've been working on!
                    </p>
                </div>
                <div className="misty-container">
                    <img src={misty} alt="looking at the fog" className="misty" />
                </div>
            </div>
        </div>
    )
  }
}

export default AboutMe;
