const { send } = require('micro')
const characters = require('../data.json')

const index = async (req, res) => {
  send(res, 200, characters)
}

const show = async (req, res) => {
  // req.params contains the param s passed through the url
  console.log(req.params)

  const data = characters.find(character => character.id === Number(req.params.id))

  send(res, 200, data)
}

module.exports = router => {
  router.get('/', index)
  router.get('/:id', show)
}
