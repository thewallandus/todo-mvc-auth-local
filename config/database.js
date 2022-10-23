const mongoose = require('mongoose')
// ^ we're calling mongoose

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    // this is just us setting us MongoDB with useNewUrlParser etc making sure we can send data to and from the MongoDB database

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    // if it is successful then this console logs Mongo Connected
  } catch (err) {
    console.error(err)
    process.exit(1)
    // if there is an error then we exit
    // if there is an error we will be able to see the error
  }
}
// helps us connect to the mongodb data base which is a function only
// connectDB is now a function that we use and call anytime

module.exports = connectDB
// ^we're exporting the connectDB function that we will call from the server.js
