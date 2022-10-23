const express = require('express')
// ^ call express
const app = express()
// calls express 
const mongoose = require('mongoose')
// mongoose which is used to set up schema
const passport = require('passport')
// sets up passport
const session = require('express-session')
// helps us make sure we store the sessions
const MongoStore = require('connect-mongo')(session)
// this actually helps us store the session
const flash = require('express-flash')
// this helps us display a message if login isn't successful
const logger = require('morgan')
// helps us see any error messages in the console
const connectDB = require('./config/database')
// I'm going to my config folder and getting my database file
const mainRoutes = require('./routes/main')
// we're going to the routes and getting the main.js file content that we exported
const todoRoutes = require('./routes/todos')
// we're going to the routes and getting the todos.js file content that we exported

require('dotenv').config({path: './config/.env'})
// ^this helps us set up dotenv so we can save variables inside it

// Passport config
require('./config/passport')(passport)
// ^ this helps us set up passport

connectDB()
// this is going to the database and calling the connectDB file I've declared there

app.set('view engine', 'ejs')
// this sets the view engine as ejs => can also set it as react
app.use(express.static('public'))
// setting the static files as public
app.use(express.urlencoded({ extended: true }))
// allows us to look at the things that are coming through and use them
app.use(express.json())
// ^ enables us to look at the things that are coming through and use them
app.use(logger('dev'))
// lets us see if there are any issues in the console
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
// this allows us to set up the sesson
// think of the secret as a way to anonymize our session id
// store key in the object just helps us store it in the database
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
// ^these two sets up passport middlewares

app.use(flash())
// sets up flash so that we can see if there are any auth errors
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
// ^most important parts
// if we go to the / route or homepage then we are to go to the mainRoutes which is in the routes folder and main file
// if we go to the /todos route or homepage then we are to go to the todoRoutes which is in the routes folder and the todos.js file
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
// ^ just sets up the server