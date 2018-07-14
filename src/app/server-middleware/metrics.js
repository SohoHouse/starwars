const client = require('prom-client')

const { collectDefaultMetrics, register } = client

collectDefaultMetrics()

module.exports = (req, res, next) => {
  if (!req.url.startsWith('/metrics')) return next()

  res.setHeader('Content-Type', register.contentType)
  return res.end(register.metrics())
}
