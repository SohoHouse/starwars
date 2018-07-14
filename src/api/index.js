const Router = require('node-async-router')
const routes = require('./routes')
const errorHandler = require('./middleware/error-handler')

const router = new Router()

Object.keys(routes).forEach(route => {
  const r = new Router()
  router.use(route, r)

  routes[route](r)
})

module.exports = async (req, res) => router(req, res, errorHandler(req, res))
