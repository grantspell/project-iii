require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const err = 'ERROR ERROR ERROR';

const db = mongoose.connection;

const { User, Project, Task } = require('./schema.js')

// DELETE ALL USERS FROM DB
User.remove({}, (err) => {
    console.log(err);
});

// MARKUP TASKS
const businessTask = new Task({ taskName: 'Email Jen', description: 'Send Jen updated insurrance information, ASAP!', taskStatus: 'INCOMPLETE' })
const personalTask = new Task({ taskName: 'Beach Towels', description: 'Pack at least 4 beach towels for the Miami trip!', taskStatus: 'INCOMPLETE' })
const musicTask = new Task({ taskName: 'Frank Sinatra', description: 'Take some Frank Sinatra classics and make your mutations! ("My Way") ', taskStatus: 'COMPLETE' })

// MARKUP PROJECTS
const businessProject = new Project({ whatN: 'Emails', whatV: 'Send', projectName: 'Emails to Send', projectStatus: 'INCOMPLETE', tasks: [businessTask, {}] })
const personalProject = new Project({ whatN: 'Things', whatV: 'Pack', projectName: 'Things to Pack', projectStatus: 'COMPLETE', tasks: [personalTask, {}] })
const musicProject = new Project({ whatN: 'Songs', whatV: 'Record', projectName: 'Songs to Record', projectStatus: 'INCOMPLETE', tasks: [musicTask, {}] })

// MARKUP USERS
const grant = new User({ userName: 'grantSpell', projects: [businessProject, musicProject, {}] })
const sherri = new User({ userName: 'sherrisWorld', projects: [personalProject, {}] })
const shawn = new User({ userName: 'shawnMowsLawn', projects: [musicProject, {}] })

const users = [grant, sherri, shawn]
const projects = [businessProject, personalProject, musicProject]
const tasks = [businessTask, personalTask, musicTask]

users.forEach((user) => {

    user.projects = projects

    user.save()
        .then((user) => {
            console.log(` [ S ] ${user.userName} SEEDED && SAVED [ S ] `)
        })
        .catch((err) => {
            console.log(err)
        })
});

// DISCONNECT FROM DB
db.close();
