const { send } = require('micro')
const { logger } = require('../../helpers')

module.exports = (req, res) => err => {
  if (!err) return send(res, 404, 'Resource not found')
  if (err.statusCode) return send(res, err.statusCode, err.message || '')

  switch (err.constructor) {
    default:
      logger.log(err)
      return send(res, 500)
  }
}
