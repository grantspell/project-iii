import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersIndex extends Component {



    render() {
        return (
            <div>
                <h1> Index of Existing Users </h1>
                 {this.props.users.map(user => {
                     return (
                        <Link key={user._id} _id={user._id} to={`/user/${user._id}`}>{user.userName}<br/></Link>
                     )
                })}
            </div>
        );
    }
}

export default UsersIndex

/*     state = {
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
    } */