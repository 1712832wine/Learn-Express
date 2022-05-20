const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: 'string', maxLength: 200 },
    description: { type: 'string', maxLength: 500 },
    image: { type: 'string', maxLength: 1000 },
    createdAt: { type: 'string', default: Date.now() },
    updatedAt: { type: 'string', default: Date.now() }

});

module.exports = mongoose.model('Course', Course);