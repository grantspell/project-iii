import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            projects: []
        },
        redirectToProject: false,
        newUserId: ''
    }

    handleChange = (event) => {
        const att = event.target.name
        const updateUser = {...this.state.NewUser}
        updateUser[att] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        
        this.setState({redirectToProject: true, newUserId: res.data._id})
    }

    render() {

        if (this.state.redirectToProject) {
            return <Redirect to={`/user/${this.state.newUserId}`} />
        }

        return (
            <div>
                <h1> NEW USER SIGNUP PAGE </h1>
                <h1> Sign Up </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name"> Name: </label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newUser.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="userName"> User Name: </label>
                        <input
                            onChange={this.handleChange} name="userName"
                            type="text" value={this.state.newUser.userName}
                        />
                    </div>
                    <br />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm