# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

bcrypt => encrypts the password
connect-mongo => connects mongodb
dotenv => stores sensitive data
ejs => templating language
express-flash => extension of connect-flash with the ability to define a flash message and render it without redirecting the request.
express-session => something to do with the user's sessions
and doing stuff with it
mongoose => schema models that enables us to talk to the database
morgan => it has something to do with logging to the terminal => shows us stuff in the terminal
passport => enables us to allow user authentication
passport-local => it's saying we're going to use a local strategy => that means we're going to keep it local in our database.
validator => check thing about strings or preventing bad things from happening to your database.


---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎


