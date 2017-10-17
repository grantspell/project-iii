import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// IMPORT COMPONENTS
import LandingPage from './components/landing/LandingPage'
import ProductivityPage from './components/productivity/ProductivityPage'
import UsersIndex from './components/users/UsersIndex'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/:userId" component={ProductivityPage} />
            <Route exact path="/usersIndex" component={UsersIndex} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
