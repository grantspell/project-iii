import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// COMPONENETS
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

class Login extends Component {

    state = {
        users: [{
        }]
    }

    componentWillMount () {
        this.fetchUsers()
    }

    // GET USERS [axios]
    fetchUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }



    render() {
        return (
            <div>
                <LoginForm />
                <SignUpForm />
            </div>
        );
    }
}

export default Login