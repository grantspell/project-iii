import React from 'react'

// IMPORT COMPONENTS
import User from './User'

const UsersIndex = (props) => {
    return (
        <div>
            <h1> Index of Existing Users </h1>
             {props.users.map((user) => {
                 return (
                     <User
                        key={user._id} _id={user._id}
                        userName={user.userName}
                        projects={user.projects}
                    /> 
                )
                })}
        </div>
    )
}

export default UsersIndex
