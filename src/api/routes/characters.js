const { send } = require('micro')
const data = require('../data.json')

const index = async (req, res) => {
  send(res, 200, [])
}

const show = async ({ params }, res) => {
  send(res, 200, {})
}

module.exports = router => {
  router.get('/', index)
  router.get('/:id', show)
}
