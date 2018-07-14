import Vuex from 'vuex'
// import myModule from './my-module'

const createStore = () =>
  new Vuex.Store({
    state: {},
    modules: {
      // myModule: {
      //   namespaced: true,
      //   ...myModule
      // }
    }
  })

export default createStore
