const express = require('express')
const router = express.Router()
const { handleBatch } = require('../controllers/batchControllers.js')


// POST /batch
router.post('/', handleBatch)


module.exports = router