import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LandingPageStyles = styled.div`
    text-align: center;
`

class LandingPage extends Component {
    
    render() {
        return (
            <LandingPageStyles>
                <h1> LANDING / HOME PAGE </h1>
                <h1> What(n.) to What(v.) </h1>
                <p> Your Guide to Productivity </p>
                    <br />
                <Link to="/logIn">LOG IN</Link><span>  </span>
                <Link to="/signUp">SIGN UP</Link><span>  </span>
                <Link to='/user/59e621baaf53f553e147e2e9'>DEMO</Link>
            </LandingPageStyles>
        )
    }
}

export default LandingPage;