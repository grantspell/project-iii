import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// IMPORT COMPONENTS
import NavBar from './NavBar'

class LandingPage extends Component {
    
    state = {
        navBar: {
            title: 'What(n.) to What(v.)',
            right0: '<Link to="/">Home</Link>',
            right1: '',
            right2: '',
            right3: ''
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                    <br />
                <h1> LANDING / HOME PAGE </h1>
                <h1> What(n.) to What(v.) </h1>
                <p> Your Guide to Productivity </p>
                    <br />
                <Link to="/logIn">LOG IN</Link><span>  </span>
                <Link to="/signUp">SIGN UP</Link><span>  </span>
                <Link to='/user/59e621baaf53f553e147e2e9'>DEMO</Link>
            </div>
        )
    }
}

export default LandingPage;