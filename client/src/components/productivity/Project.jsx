import React from 'react'
import styled from 'styled-components'

const Project = (props) => {
    const deleteProject = () => {
        props.deleteProject(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateProject = () => {
        props.updateProject(props._id)
    }

    return (
        <div>
            <br/>
            <h1>{props.projectName}</h1>

            <label for="projectName">Edit Project Name: </label>            
            <br />
            <input 
                onBlur={updateProject}
                onChange={handleChange}
                name="projectName"
                value={props.projectName}
            />
            
            <br /><br />
            <button onClick="/">Open Project</button>
            <button onClick={deleteProject}>Delete Project</button>


        </div>
    )
}

export default Project
