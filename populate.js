require('dotenv').config()
const mongoose = require('mongoose')
const testPagination = require('./src/models/TestPagination')

const jsonProduct = require("./product.json")


const connectDB = () => {
    // Connect to database
    mongoose.connect( process.env.DATABASE_URL + process.env.DATABASE_NAME, () => {
        console.log("DB connection created successfully!");
    })
}


const start = async () => {
    try {
        await connectDB();
        console.log("Success");
        await testPagination.deleteMany()
        await testPagination.create(jsonProduct);
    } catch(err) {
        console.log(err);
    }
}

start()