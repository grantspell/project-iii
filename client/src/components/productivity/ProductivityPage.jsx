import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ProjectsList from './ProjectsList'

class ProductivityPage extends Component {

    state = {
        user: {
            userName: '',
            projects: [{
                whatN: '',
                whatV: '',
                projectName: ''
            }]
        }
    }

// User Information
    async componentWillMount () {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

// Create Project
    createNewProject = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/projects`)
        console.log(res.data)
        this.setState({ user: res.data })
    }

// Delete Project
    deleteProject = async (projectId) => {
        const { userId } = this.props.match.params
        const id = projectId
        const res = await axios.delete(`/api/users/${userId}/projects/${id}`)
        this.setState({ user: res.data })
    }

// Patch
    handleChange = (event, projectId) => {
        const att = event.target.name
        const clonedUser = {...this.state.user}
        const project = clonedUser.projects.find(i => i._id === projectId)
        console.log(project)
        project[att] = event.target.value
        this.setState({ user: clonedUser })
    }

// Update Project
    updateProject = async (projectId) => {
        const { userId } = this.props.match.params
        const id = projectId
        const clonedUser = {...this.state.user}
        const project = clonedUser.projects.find(i => i._id === projectId)
        const res = await axios.patch(`/api/users/${userId}/projects/${id}`, {
            project: project
        })
        this.setState({ user: res.data })
    }


    render() {
        return (
            <div>
                <Link to="/">Home</Link><br/><br/>
                <h1> {this.state.user.userName}s PRODUCTIVITY PAGE </h1>

                <button onClick={this.createNewProject}>New Project</button>
                <ProjectsList
                    projects={this.state.user.projects}
                    handleChange={this.handleChange}
                    deleteProject={this.deleteProject}
                    updateProject={this.updateProject}
                />
            </div>
        );
    }
}

export default ProductivityPage;