const PRODUCTION = process.env.NODE_ENV === 'production'
if (!PRODUCTION) {
  require('dotenv-safe').load({
    sample: 'config/.env.example',
    path: 'config/.env'
  })
}

const autoprefixer = require('autoprefixer')
const { readdirSync } = require('fs')
const { resolve } = require('path')


const plugins = readdirSync(resolve(__dirname, 'src/app/plugins')).map(f => {
  const [name] = f.split('.')
  return `@/plugins/${name}`
})

const serverMiddleware = [
  '@/server-middleware/metrics.js',
  { path: '/api', handler: '@@/src/api/index' }
]
if (PRODUCTION) serverMiddleware.unshift('@/server-middleware/logger.js')

module.exports = {
  build: {
    postcss: [
      autoprefixer()
    ],
    babel: {
      presets: [
        'env',
        'vue-app'
      ]
    }
  },
  css: [
    '@@/node_modules/normalize.css/normalize.css',
    '@/assets/sass/main.sass'
  ],
  head: {
    bodyAttrs: {
      class: ''
    }
  },
  loading: false,
  manifest: {
    theme_color: '#3B8070'
  },
  plugins,
  srcDir: 'src/app/',
  serverMiddleware
}
