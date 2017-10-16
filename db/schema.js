const mongoose = require('mongoose');

// INITIATE NAMESPACE FOR SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

// SCHEMAS
const TaskSchema = new Schema({
    taskName: {
        type: String
    },
    description: {
        type: String
    },
    taskStatus: {
        type: String,
        default: 'INCOMPLETE'
    }
})

const ProjectSchema = new Schema({
    whatN: {
        type: String,
        default: 'What(n.)'
    },
    whatV: {
        type: String,
        default: 'What(v.)'
    },
    projectName: '',
    projectStatus: {
        type: String,
        default: 'INCOMPLETE'
    },
    tasks: [TaskSchema]
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    projects: [ProjectSchema]
})

// MODELS
const User = mongoose.model('User', UserSchema)
const Project = mongoose.model('Project', ProjectSchema)
const Task = mongoose.model('Task', TaskSchema)

// EXPORTS
module.exports = {
    User, Project, Task
}