import React from 'react'
import { Link } from 'react-router-dom'

// IMPORT COMPONENTS

const User = (props) => {

    const deleteUser = () => {
        props.deleteUser(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateUser = () => {
        props.updateUser(props._id)
    }

    return (
        <div>
            <h3><Link to={`/user/${props._id}`}>{props.userName}</Link> </h3>
            <button><Link to={`/user/${props._id}`}>PROJECTS</Link></button>
            <button><Link to={`/user/${props._id}/account`}>ACCOUNT</Link></button><span>  </span>
        </div>
    )
}

export default User