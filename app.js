const express = require('express')
const app = express()
const port = 3030
const characters = require('./data.json')

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
// characters.map((character, i) => {
//     return app.get(`/characters/${i+1}`, (req, res, next) => {
//         res.json(character)
//     })
// })

