import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// IMPORT COMPONENTS
import LandingPage from './LandingPage'

class NavBar extends Component {

    state = {
        navBar: {
            title: 'What(n.) to What(v.)',
            right0: <Link to="/">Home</Link>,
            right1: '',
            right2: '',
            right3: ''
        }
    }

    render () {
        return (
            <div>            
                <h1>{this.state.navBar.title}</h1>
                <div>{this.state.navBar.right0}</div>
                <div>{this.state.navBar.right1}</div>
                <div>{this.state.navBar.right2}</div>
                <div>{this.state.navBar.right3}</div>
            </div>    
        )
    }
}

export default NavBar