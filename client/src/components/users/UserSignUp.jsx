import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// IMPORT COMPONENTS
import SignUpForm from './SignUpForm'

class UserSignUp extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <SignUpForm />
            </div>
        );
    }
}

export default UserSignUp