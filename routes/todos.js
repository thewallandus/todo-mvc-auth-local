const express = require('express')
// calls express
const router = express.Router() // this is what allows us to do the magic of the router
const todosController = require('../controllers/todos') 
// this is what allows us to go to the controller todos
const { ensureAuth } = require('../middleware/auth')
// this is what allows us to go to the auth middleware

router.get('/', ensureAuth, todosController.getTodos)
// this is what does all the auth ops and once it's done it getsTheTodos
router.post('/createTodo', todosController.createTodo)
// this is what sends to the createTodo
router.put('/markComplete', todosController.markComplete)
// this is what executes the put request for markComplete
router.put('/markIncomplete', todosController.markIncomplete)
// this is what executes the markIncomplete function in todosController
router.delete('/deleteTodo', todosController.deleteTodo)
// this executes the deleteTodo function

module.exports = router
// this exports the router