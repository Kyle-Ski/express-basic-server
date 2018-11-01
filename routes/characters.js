const express = require('express')
const router = express.Router()
// const characters = require('../data.json')
const knex = require('../db/connection')

router.get('/', (req, res, next) => {
    knex('character')
        .orderBy('id', 'asc')
        .then(characters => res.json({characters}))
        .catch(error => {
            res.json({error: {status: 'num', message: 'wha.. wha happen?'}})
        })
})

router.get('/:id',(req, res, next) => {
    const id = req.params.id
    if (!(Number(id))){
        next()
    }
    knex('character')
        .where('id', id)
        .then(character => {
            res.json({character: character[0]})
        })
})

router.post('/', (req, res, next) => {
    const body = req.body
    knex('character')
        .insert(body)
        .returning('*')
        .then(character => {
            console.log(character)
            res.json({'new character': character[0]})
        })
    })
    
router.put('/:id', (req, res, next) =>{
    const id = Number(req.params.id)
    const body = req.body
    knex('character')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(response => {
            res.json({ character: response[0] })
        })
})

router.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id)
    knex('character')
        .where('id', id)
        .del()
        .returning('*')
        .then(response => {
            res.json({'deleted character': response[0]})
        })
})


module.exports = router

