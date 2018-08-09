const { send } = require('micro')

const index = async (req, res) => {
  send(res, 200, [])
}

const show = async (req, res) => {
  // req.params contains the params passed through the url
  send(res, 200, {})
}

module.exports = router => {
  router.get('/', index)
  router.get('/:id', show)
}
