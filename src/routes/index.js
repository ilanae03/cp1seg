'use strict'

const express = require('express')
const router = new express.Router()

//edpoint 
router.get('/', (req, res, next) =>{
    res.status(200).send({
        "nome" : "ilan"
    })
})

module.exports = router