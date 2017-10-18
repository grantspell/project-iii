import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// COMPONENETS
import UsersIndex from './UsersIndex'
import SignUpForm from './SignUpForm'

class Login extends Component {

    state = {
        users: [{
            userName: '',
            projects: [{
                projectName:'',
                whatN: '',
                whatV: '',
                projectStatus: '',
                tasks: [{
                    description: '',
                    taskName: '',
                    taskStatus: ''
                }]
            }]
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
                <Link to="/">Home</Link>
                <UsersIndex 
                    users={this.state.users}
                />
                <br />
                <Link to='/signUp'>New User? Sign Up Here</Link>
            </div>
        );
    }
}

export default Login
