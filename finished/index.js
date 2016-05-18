let express = require('express')
let bodyParser = require('body-parser')
let dog = require('./dog')

require('./db')

let app = new express()

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.all('/*', (req, res, next) => {
    if(req.get('Authorization') == '12345') {
        next()
    } else {
        res.status(401).send('wrong token, dude')
    }
})

app.use('/dogs', dog)

let server = app.listen(4000, () => console.log('Express server is listening on ' + server.address().port))
