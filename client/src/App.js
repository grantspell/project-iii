import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// IMPORT COMPONENTS
import LandingPage from './components/landing/LandingPage'
import ProductivityPage from './components/productivity/ProductivityPage'
import Login from './components/users/Login'
import Account from './components/users/Account'
import UserSignUp from './components/users/UserSignUp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/:userId" component={ProductivityPage} />
            <Route exact path="/logIn" component={Login} />
            <Route exact path="/user/:userId/account" component={Account} />
            <Route exact path='/signUp' component={UserSignUp} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
