let _ = require('lodash')
let ObjectId = require('mongoose').Types.ObjectId
let Dog = require('./dog')

let controller = {}

controller.list = (req, res) => {
    Dog.find({}, (err, dogs) => {
        if(err) {
            console.log('something went wrong', err)
            res.status(500).send()
        } else {
            res.json(dogs)
        }
    })
}

controller.get = (req, res) => {
    let id = new ObjectId(req.params.id)

    Dog.find({_id: id}, (err, data) => {
        if(err) {
            console.log('something went wrong', err)
            res.status(500).send()
        } else {
            res.json(data)
        } 
    })
}

controller.save = (req, res) => {
    let dog = new Dog(req.body)
    
    dog.save((err, data) => {
        if(err) {
            console.log('something went wrong', err)
            res.status(500).send()
        } else {
            res.json(data)
        }   
    })

}

module.exports = controller

