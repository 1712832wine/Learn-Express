const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to Mongoose')
    }
    catch (err) {
        console.log('Connect error')
    }
}

module.exports = { connect }