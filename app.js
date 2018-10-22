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
    res.json(characters[id-1])
})
app.listen(port, () => console.log(`I got you on http://localhost:${port}`))

// characters.map((character, i) => {
//     return app.get(`/characters/${i+1}`, (req, res, next) => {
//         res.json(character)
//     })
// })

