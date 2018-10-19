import React, { Component } from 'react';
import IntroLogo from './IntroLogo'
import MainPage from './MainPage'
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';

class App extends Component {
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
    setTimeout(this.switchUp, 4000)
  }
  render() {
    if (this.state.entrance === false){
      return (
        <div>
          <IntroLogo key="1" />
        </div>
      );
    } else {
      return (
        <div>
          <MainPage key="2" />
        </div>
      );
    }
  }
}

export default App;
