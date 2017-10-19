import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const ProjectsList = (props) => {
    return (
        <div>
            {props.projects.map((project) => {
                return (
                    <Project
                    key={project._id} _id={project._id}
                    handleChange={props.handleChange}
                    updateProject={props.updateProject}
                    deleteProject={props.deleteProject}
                    projectName={project.projectName}
                    />
                )
            })}
        </div>
    )
}

export default ProjectsList