import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// IMPORT COMPONENTS

const NavBarStyles = styled.div`
text-align: center;
background-color: gray;
color: white;
padding: 3px;
`

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
            <NavBarStyles>            
                <h1>{this.state.navBar.title}</h1>
                <div>{this.state.navBar.right0}</div>
                <div>{this.state.navBar.right1}</div>
                <div>{this.state.navBar.right2}</div>
                <div>{this.state.navBar.right3}</div>
            </NavBarStyles>    
        )
    }
}

export default NavBar