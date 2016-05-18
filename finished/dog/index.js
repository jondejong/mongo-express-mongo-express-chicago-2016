let controller = require('./dog.controller')
let express = require('express')

let router = express.Router()

router.get('/', controller.list)
router.get('/:id', controller.get)
router.post('/', controller.save)

module.exports = router;