import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// IMPORT COMPONENTS
import NavBar from '../NavBar'

class LandingPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1> LANDING / HOME PAGE </h1>
                <h1> What(n.) to What(v.) </h1>
                <p> Your Guide to Productivity </p>
                <br />
                <Link to="/">Home</Link>
                <br /> <br />
                <Link to="/logIn">LOG IN</Link>
                <br />
                <Link to="/signUp">SIGN UP</Link>
                <br />
                <Link to='/user/59e621baaf53f553e147e2e9'>DEMO</Link>
                <br />
            </div>
        )
    }
}

export default LandingPage;