import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// IMPORT COMPONENTS
import NavBar from '../landing/NavBar'

class Account extends Component {

    state = {
        user: {
            userName: '',
            projects: []
        }
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }

    // DELETE User
    deleteUser = async (userId) => {
        const userid = userId
        const res = await axios.delete(`/api/users/${userid}/delete`)
        this.setState({users: res.data})
    }

    // PATCH User
    // UPDATE User

    deleteUser


    render() {
        return (
            <div>
                <NavBar />
                <h1>{this.state.user.userName}s Account</h1>
                
                <button onClick={this.deleteUser}><Link to={`/user/{this.state.user.userId/account/delete}`}>DELETE</Link></button>
            </div>
        );
    }
}

export default Account;