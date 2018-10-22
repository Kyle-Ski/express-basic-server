const express = require('express')
const app = express()
const port = 3030
const characters = require('./data.json')
const parser = require('body-parser')
app.use(parser.json())

app.get('/', (req, res, next) => res.send('YO!⛷'))
app.get('/characters', (req, res, next) => {
    res.json({characters})
})

app.get('/characters/:id',(req, res, next) => {
    const id = req.params.id
    if (!(Number(id))){
        next()
    }
    const character = characters.filter(character => character.id == id)[0]
    res.json({character: character})
})

app.post('/characters', (req, res, next) => {
    const body = req.body
    // hold the data that is to be posted from the request body 
    //insert new data into the characters array 
    // bring in some middleware to bring in body
    res.send(`Yo, you be hitting my post route with ${body}`)
    console.log(body)
    res.json({characters: characters})
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}
app.listen(port)
    .on('error',     console.error.bind(console))
    .on('listening', console.log.bind(console, 'I got you on http://localhost:' + port))
