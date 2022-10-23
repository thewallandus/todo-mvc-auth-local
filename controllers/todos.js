const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            // find the items that has the userId we want
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            // counts the number of documents that satisfy our solution in the database
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
            // this is what sends our stuff to the ejs as the variables that we've named them here as
        }catch(err){
            console.log(err)
            // this is how we see the error message
        }
    },
    // gets the todos
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            // this creates the todo item with completed already set to false
            console.log('Todo has been added!')
            // lets us know that the item has been added
            res.redirect('/todos')
            // redirects to the todos page
        }catch(err){
            console.log(err)
            // console logs the error message
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
        // this marks the item complete
        // we find using the id which is coming from the javascript file
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    // this marks the item incomplete 
    // this is a put request
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
    // this is the one that deletes the item
}    