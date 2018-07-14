const morgan = require('morgan')
const json = require('morgan-json')

morgan.token('error', (req, res) => (res.error ? res.error.toString() : ''))
const format = json(':method :url :status :response-time ms :error')
module.exports = morgan(format)
