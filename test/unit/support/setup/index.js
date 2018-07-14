import Vue from 'vue'
import '@/plugins/form'
import { logError } from '@/plugins/global'
import MockComponents from './mock-vue-components'

require('dotenv-safe').load({
  sample: 'config/.env.example',
  path: 'config/.env.test'
})

Vue.prototype.$logError = logError

MockComponents.forEach(MockComponent => Vue.component(MockComponent.name, MockComponent))
