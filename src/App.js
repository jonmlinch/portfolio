import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Background from './Background'
import Nav from './Nav'
import IntroLogo from './IntroLogo'
import MainPage from './MainPage'
import AboutMe from './AboutMe'
import './App.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, transition: {duration: 1000}, beforeChildren: true},
  exit: { opacity: 0, transition: {duration: 1000}}
})

class App extends Component {
  
  render() {
    return(
      <Router>
        <Route 
          render = {({location}) => (
            <div>
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={IntroLogo} key="intro" />
                    <Route path="/home" component={MainPage} key="home" />
                    <Route path="/about" component={AboutMe} key="about" />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </div>
          )}
        />
      </Router>
    )
  }
}


export default App;
