const express = require('express')
const app = express()
const port = 3030
const parser = require('body-parser')
//Route Imports
const charactersRoutes = require('./routes/characters')



//general middleware applied to all requests
app.use(parser.json())
app.use(parser.urlencoded({extended: false}))
//the route needs to below the middleware so that it has access to all the middleware we have set up
//also needs to be above error handlers to have access to those


app.get('/', (req, res, next) => res.send(`YO!⛷, server is running... use http://localhost:${port}/characters to start of`))
app.use('/characters', charactersRoutes)
//any requests that START with /characters will use this route^^

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
