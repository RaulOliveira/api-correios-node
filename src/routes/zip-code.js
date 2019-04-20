const express  = require('express')
const router   = express.Router()
const Correios = require('node-correios')
const correios = new Correios()

router.get('/', (request, response) => {
    correios.consultaCEP ( 
        { cep : request.body.cep },
        (error, result) => {
            return response.json(result) 
        }
    ) 
})

module.exports = router