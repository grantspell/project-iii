import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

// IMPORT COMPONENTS
import LandingPage from './components/landing/LandingPage'
import SignUpPage from './components/login/SignUpPage'
import ProductivityPage from './components/productivity/ProductivityPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/user/:userId" component={ProductivityPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
