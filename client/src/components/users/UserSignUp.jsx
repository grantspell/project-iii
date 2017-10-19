import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// IMPORT COMPONENTS
import NavBar from '../landing/NavBar'
import SignUpForm from './SignUpForm'

class UserSignUp extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SignUpForm />
            </div>
        );
    }
}

export default UserSignUp