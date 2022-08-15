const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./src/routes/auth')
const userRoute = require('./src/routes/user')
const eCommerceUserRoute = require('./src/routes/e-commerce/user')
const paginationRoute = require('./src/routes/pagination-route')
// const Route = require('./src/routes/e-commerce/')
// const Route = require('./src/routes/e-commerce/')
// const Route = require('./src/routes/e-commerce/')
// const Route = require('./src/routes/e-commerce/')

// confing .env file
dotenv.config()

// config body of request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/test-pagination', paginationRoute);
app.use('/api/e-commerce/users', eCommerceUserRoute);

// Connect to database
mongoose.connect( process.env.DATABASE_URL + process.env.DATABASE_NAME, () => {
    console.log("DB connection created successfully!");
})

app.listen(process.env.PORT, () => {
    console.log('your server is running on port : '+ process.env.PORT);
})