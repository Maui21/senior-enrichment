'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/campus')
const User = require('../db/models/user')
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req, res, next)=>{
	User.findAll({})
	.then(allStudents => res.send(allStudents))
	.catch(next)
})

api.get('/campuses', (req, res, next)=>{
	Campus.findAll({})
	.then(allCampuses => {
		res.send(allCampuses)
	})
	.catch(next)
})

api.get('/students/:campusId', (req, res, next) => {
	// console.log(req.params.id)
	User.findAll({where:{campusId: req.params.campusId}})
	.then(allCampusStudents => res.send(allCampusStudents))
	.catch(next)
})

// api.get('/campuses/:id', (req, res, next)=>{res.send('a campus')})

api.post('/campuses', (req, res, next)=>{
	Campus.create(req.body)
	.then(createdCampus => {
		res.status(201).send(createdCampus)
	})
	.catch(next)
})

api.post('/students', (req, res, next)=>{
	User.create(req.body)
	.then(createdStudent => {
		res.status(201).send(createdStudent)
	})
	.catch(next)
})


// api.put('/students/:id', (req, res, next)=>{res.send('update student')})
// api.put('/campuses/:id', (req, res, next)=>{res.send('update campus')})

api.delete('/students/:id', (req, res, next)=>{
	// const deleteStudent = User.findById(req.params.id)
	// deleteStudent.then(foundStudent => foundStudent.destroy())
	// .then(() =>{
	// 	console.log(deleteStudent)
	// 	res.send(deleteStudent)
	// })
	User.findById(req.params.id)
	.then(foundStudent => foundStudent.destroy())
	.then((deletedStudent) =>{
		console.log(deletedStudent)
		res.send(deletedStudent)
	})
})
// api.delete('/campuses/:id', (req, res, next)=>{res.send('delete campus')})

module.exports = api
