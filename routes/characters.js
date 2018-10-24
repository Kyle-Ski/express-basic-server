const express = require('express')
const router = express.Router()

router.get('/characters', (req, res, next) => {
    res.json({characters})
})

router.get('/characters/:id',(req, res, next) => {
    const id = req.params.id
    if (!(Number(id))){
        next()
    }
    const character = characters.filter(character => character.id == id)[0]
    res.json({character: character})
})

router.post('/characters', (req, res, next) => {
    const body = req.body
    // hold the data that is to be posted from the request body 
    // bring in some middleware to bring in body
    console.log(body)
    // insert new data into the characters array 
    characters.push(body)
    res.json({characters: characters})
})

// router.put('/characters/:id', (req, res, next) =>{
//     const id = Number(req.params.id)
//     const body = req.body
//     const findCharacterIdex = characters.indexOf(characters.filter(character => character.id === id)[0])
//     characters[findCharacterIdex] = body
//     res.json({characters: characters})
// })

// Using data percistance unlike the above put method
router.put('/characters/:id', (req, res, next) =>{
    const id = Number(req.params.id)
    const body = req.body
    const newCharactersArray = characters.map(character => {
        if (character.id === id){
            return body
        }
        return character
    })
    // res.json() with the modified array
    res.json({ characters: newCharactersArray })
})

router.delete('/characters/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const theyLive = characters.filter(character => character.id !== id)
    res.json({characters: theyLive})
})


module.exports = router

