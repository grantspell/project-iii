import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// COMPONENETS
import UsersIndex from './UsersIndex'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

class Login extends Component {

    render() {
        return (
            <div>
                <UsersIndex />
                <SignUpForm />
                <LoginForm />
                <Link to='/signup'>New User | Sign Up</Link>
            </div>
        );
    }
}

export default Login