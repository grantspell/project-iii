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
            <div> <br/> </div>
            <h1>{props.projectName}</h1>
            
             <input 
            onBlur={updateProject}
            onChange={handleChange}
            name="projecName"
            value={props.projecName}
            />
            
            <br />
            <button onClick={deleteProject}>Delete Project</button>


        </div>
    )
}

export default Project
