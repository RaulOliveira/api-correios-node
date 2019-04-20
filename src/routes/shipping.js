const express  = require('express')
const router   = express.Router()
const Correios = require('node-correios')
const correios = new Correios()

router.get('/', (request, response) => {
    correios.calcPreco ( 
        request.body,
        (error, result) => {
            return response.json(result) 
        }
    ) 
})

module.exports = router