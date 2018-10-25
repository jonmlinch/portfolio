import React, { Component } from 'react';
import background from './assets/dust_scratches.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
        transitionName="fadeScratches"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeaveTimeout={1000}>
          <img src={this.props.image} alt="dust-scratches" className="background-scratches" />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;