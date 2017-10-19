import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// IMPORT COMPONENTS
import UsersIndex from './UsersIndex'

class Account extends Component {

    state = {
        user: {
            userName: '',
            projects: []
        }
    }

    // USER INFORMATION ONLOAD
    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }


    // PATCH User
    handleChange = (event, userId) => {
        const att = event.target.Name
        const clonedUser = {...this.state.user}
        const user = clonedUser.find(i => i._id === userId)
        console.log(user)
        user[att] = event.target.value
        this.setState({ user: clonedUser })
    }

    // UPDATE User
    updateUser = async (userId) => {
        const {thisUserId} = this.props.match.params
        const id = userId
        const clonedUser = {...this.state.user}
        const user = clonedUser.find(i => i._id === userId)
        const res = await axios.patch(`/api/users/${thisUserId}`)
    }

    // DELETE User
    deleteUser = async (userId) => {
        const { thisUserId } = this.props.match.params
        const id = userId
        const res = await axios.delete(`/api/users/${id}/account/delete`)
        this.setState({user: res.data})
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.userName}s Account</h1>

                <label for="userName">Edit User Name: </label>
                <br />
                <input
                    onBlur={this.updateUser}
                    onChange={this.handleChange}
                    name="userName"
                    value={this.state.userName}
                />
                <br /><br />
                <button onClick={this.deleteUser}>DELETE</button>
            </div>
        );
    }
}

export default Account;