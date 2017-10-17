import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// COMPONENTS
import Login from '../users/Login'

class LandingPage extends Component {

    state = {
        users: []
    }

    render() {
        return (
            <div>
                <h1> LANDING / HOME PAGE </h1>
                <h1> What(n.) to What(v.) </h1>
                <p> Your Guide to Productivity </p>
                <br />
                <Login />
            </div>
        )
    }
}

export default LandingPage;