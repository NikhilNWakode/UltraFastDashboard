const express = require('express')
const cors = require('cors')


const batchRoutes = require('../routes/batchRoutes.js')


const app = express()
app.use(express.json())
app.use(cors())


// Basic health check
app.get('/health', (req, res) => res.json({ ok: true, uptime: process.uptime() }))


app.use('/batch', batchRoutes)


// Basic error handler
app.use((err, req, res, next) => {
console.error(err)
res.status(500).json({ ok: false, error: 'Internal Server Error' })
})


module.exports = app