let mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number
});

let Dog = mongoose.model('dog', dogSchema)

module.exports = Dog