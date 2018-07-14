const { Nuxt, Builder } = require('nuxt')
const cypress = require('cypress')
const config = require('../../../nuxt.config.js')
const { dev } = require('minimist')(process.argv.slice(2))

const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)

const cypressOptions = {}

const execute = async () => {
  await builder.build()
  await nuxt.listen(process.env.PORT || 3000)

  if (dev) return

  const { failures } = await cypress.run(cypressOptions)
  await nuxt.close()
  process.exit(failures)
}

execute()
