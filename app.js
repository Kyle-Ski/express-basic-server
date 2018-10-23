const express = require('express')
const app = express()
const port = 3030
const characters = require('./data.json')
const parser = require('body-parser')

//general middleware applied to all requests
app.use(parser.json())
app.use(parser.urlencoded({extended: false}))

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
    // bring in some middleware to bring in body
    console.log(body)
    // insert new data into the characters array 
    characters.push(body)
    res.json({characters: characters})
})

app.put('/characters/:id', (req, res, next) =>{
    const id = Number(req.params.id)
    const body = req.body
    const findCharacterIdex = characters.indexOf(characters.filter(character => character.id === id)[0])
    characters[findCharacterIdex] = body
    res.json({characters: characters})
})

// Using data percistance unlike the above put method
// app.put('/characters/:id', (req, res, next) =>{
//     const id = Number(req.params.id)
//     const body = req.body
//     const newCharactersArray = characters.map(character => {
//         if (character.id === id){
//             return body
//         }
//         return character
//     })
// })

app.delete('/characters/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const theyLive = characters.filter(character => character.id !== id)
    res.json({characters: theyLive})
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
