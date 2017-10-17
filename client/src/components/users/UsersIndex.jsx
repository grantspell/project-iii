import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersIndex extends Component {

    state = {
        users: []       
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
                <h1> Index of Existing Users </h1>
                 {this.state.users.map(user => {
                     return (<Link key={user._id} to={`/user/${user._id}`}>{user.userName} <br/></Link>)
                })}
            </div>
        );
    }
}

export default UsersIndex;